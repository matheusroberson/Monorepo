# Monorepo
## Compartilhando components entre React Native e NextJs

### Começo

#### Pré-requisitos
- Necessita Node.js 12 ou mais recente.
- Variáveis de Ambiente configuradas. [React Native](https://reactnative.dev/docs/environment-setup)

#### Instalação

- `git clone https://github.com/matheusroberson/monorepo.git`
- `cd monorepo`
- `yarn`
- `npx lerna bootstrap`

---

### Iniciando o Projeto

#### Web

***Se está executando isso pela primeira siga os comandos abaixo:***

- `npm link ../web/node_modules/react`
> execute como administrador
- Criar um arquivo .env em packages/web
- Crie a variável de ambiente

> Deve parecer com isso abaixo:

```
TOKEN_API=YOUR_TOKEN_API
```
***Caso não, execute para a visualização da página em*** `localhost:3000/`

`yarn web`

### Android
`yarn android`

### iOS
`yarn ios`

if this is the first time you want to run on iOS, go to `cd packages/mobile/ios` and do `pod install` before you run.
