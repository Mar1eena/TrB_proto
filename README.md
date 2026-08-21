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

## Релиз

Одна команда: коммит (если указан `MSG`), новая версия и тег, push в GitHub, публикация npm.

```bash
make gene
make release PART=patch MSG="add ClickHouse manager" OTP=123456
```

`PART`: `patch` (0.1.3 → 0.1.4), `minor` (0.2.0), `major` (1.0.0).

Если изменения уже закоммичены:

```bash
make release PART=patch OTP=123456
```

Через token вместо OTP: `TOKEN=npm_...` (сначала `make logout`).

Только npm, без тега и push:

```bash
make publish OTP=123456
```
