import { Injectable } from '@nestjs/common';
import { scryptSync, randomUUID, randomBytes } from 'crypto';
import { ConfigService } from '@nestjs/config';
import { ConfigEnv } from 'src/common/domain/types/env.type';

@Injectable()
export class CryptoService {
  private secret: string;

  constructor(private readonly envService: ConfigService<ConfigEnv, true>) {
    this.secret = this.envService.get('CRYPTO_SECRET');
  }

  uuid() {
    return randomUUID();
  }

  randomKey(size: number = 14) {
    return randomBytes(size).toString('base64');
  }

  encrypt(text: string, salt: string) {
    return scryptSync(text, salt, 32).toString('hex');
  }

  hash(text: string, secret?: string): string {
    const salt = Buffer.from(secret ?? this.secret).toString('hex');
    return this.encrypt(text, salt) + salt;
  }

  matchEncrypt(text: string, hash: string): boolean {
    const salt = hash.slice(64);
    const originalPassHash = hash.slice(0, 64);
    const currentPassHash = this.encrypt(text, salt);
    return originalPassHash === currentPassHash;
  }

  matchHash(text: string, hash: string, secret?: string): boolean {
    const currentPassHash = this.hash(text, secret);
    return hash === currentPassHash;
  }
}
