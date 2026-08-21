# TrB proto

Контракты сервисов и сгенерированный код:

- Go — `gen/go`
- JavaScript / TypeScript (protobuf + gRPC-Web) — npm-пакет [`@marleena/trb-proto`](https://www.npmjs.com/package/@marleena/trb-proto)

## Генерация

Нужны `protoc` и плагины: `protoc-gen-go`, `protoc-gen-go-grpc`, `protoc-gen-grpc-gateway`, `protoc-gen-js`, `protoc-gen-grpc-web`.

```bash
make gene
```

Собирает Go, JS/TS и descriptor set. Google API-аннотации для JS генерируются отдельно, чтобы не попасть в `gen/go`.

Другие цели: `make desc`, `make buf`.

## npm

```bash
npm install @marleena/trb-proto
```

```ts
import { MessageRequest } from '@marleena/trb-proto/example/Example_pb';
import { exampleClient } from '@marleena/trb-proto/example/ExampleServiceClientPb';

const client = new exampleClient('https://api.example.com');
const req = new MessageRequest();
req.setText('hello');
```

Сервисы: `example`, `tinvest`, `moex`, `clickhouse` (native gRPC), `manager_indicators`, `api/nats`, `api/clickhouse`, `api/db_api`, `api/test`.

`api/clickhouse` (`trb.clickhouse.manager.public.contract.v1.ClickHouseManager`) — DDL: базы, таблицы, колонки. Запросы — `clickhouse.grpc.ClickHouse`, прикладные выборки — `api/db_api`.

`api/db_api` (`trb.db.api.public.contract.v1.DbApi`) — gRPC API веб-клиента к ClickHouse и Postgres. Новый метод добавляется RPC-ом в `services/api/db_api/db_api.proto`.

## CI/CD

Один workflow [Release](.github/workflows/release.yml): при коммите в `main` с сообщением `v1.2.3`

- публикует `@marleena/trb-proto` в npm;
- просит [pkg.go.dev](https://pkg.go.dev/github.com/Mar1eena/trb_proto) проиндексировать `github.com/Mar1eena/trb_proto@v1.2.3` (для этого пушится git-тег той же версии).

Нужен secret **`NPM_TOKEN`**. Сообщение коммита должно совпадать с версией в `package.json`.

## Релиз

Генерация локально, bump версии и push. Остальное делает Actions.

```bash
make gene
make release PART=patch MSG="add ClickHouse manager"
```

`PART`: `patch`, `minor`, `major`. `npm version` создаёт коммит `v1.0.10` (без тега).

Если изменения уже закоммичены:

```bash
make release PART=patch
```

Вручную тот же эффект: коммит с сообщением `v1.0.10` (как в `package.json`) и push в `main`.
