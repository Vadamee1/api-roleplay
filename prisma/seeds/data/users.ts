import { ConfigService } from '@nestjs/config';
import { CryptoService } from '../../../src/common/application/services/crypto.service';
import { ConfigEnv } from 'src/common/domain/types/env.type';
import { UsersBuilder } from '../../../src/users/domain/builders/users.builder';

const cryptoService = new CryptoService(new ConfigService<ConfigEnv, true>());

export const users = {
  vadam: new UsersBuilder()
    .id('cmax94vir00010djlbqci0b9k')
    .name('Vadam')
    .email('oldesthero.vadam@outlook.com')
    .password(cryptoService.hash('Sagitario1'))
    .build(),
};
