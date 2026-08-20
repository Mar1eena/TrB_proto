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

Сервисы: `example`, `tinvest`, `nats`, `moex`, `clickhouse`, `clickhouse_manager`, `manager_indicators`, `db_api`.

`clickhouse_manager` (`trb.clickhouse.manager.public.contract.v1.ClickHouseManager`) — DDL: базы, таблицы, колонки. Запросы — `clickhouse.grpc.ClickHouse`, прикладные выборки — `db_api`.

`db_api` (`trb.db.api.public.contract.v1.DbApi`) — gRPC API веб-клиента к ClickHouse и Postgres. Новый метод добавляется RPC-ом в `services/db_api/db_api.proto`.

## Публикация

```bash
make gene
make login
make publish
```

Если `make` не спрашивает 2FA (часто на Windows):

```bash
make publish OTP=123456
```

Через [granular token](https://www.npmjs.com/settings/marleena/tokens/create) (Read and write + Bypass 2FA):

```bash
make logout
make publish TOKEN=npm_...
```
