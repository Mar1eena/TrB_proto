# TrB proto — JavaScript / TypeScript

Сгенерированные protobuf-сообщения и gRPC-Web клиенты.

## Установка

```bash
npm install @marleena/trb-proto
```

Пакет публикуется на npm при релизе (`make rel` → GitHub Actions → `@marleena/trb-proto@x.y.z`).

## Импорты

Пути соответствуют каталогам в `gen/js-ts/`:

```ts
import { ListCandlesRequest } from '@marleena/trb-proto/clickhouse/clickhouse_pb';
import { ClickhouseServiceClient } from '@marleena/trb-proto/clickhouse/ClickhouseServiceClientPb';

import { ComputeRequest } from '@marleena/trb-proto/indicators/indicators_pb';
import { IndicatorsServiceClient } from '@marleena/trb-proto/indicators/IndicatorsServiceClientPb';
```

T-Invest API:

```ts
import { SharesResponse } from '@marleena/trb-proto/api/tinvest/instruments_pb';
import { InstrumentsServiceClient } from '@marleena/trb-proto/api/tinvest/InstrumentsServiceClientPb';
```

## Пример: gRPC-Web

```ts
import { ClickhouseServiceClient } from '@marleena/trb-proto/clickhouse/ClickhouseServiceClientPb';
import { ListCandlesRequest } from '@marleena/trb-proto/clickhouse/clickhouse_pb';

const client = new ClickhouseServiceClient('http://localhost:8081');

const req = new ListCandlesRequest();
req.setUid('…');
req.setInterval(5);

client.listCandles(req, {}, (err, resp) => {
  if (err) throw err;
  console.log(resp.getCandlesList());
});
```

Envoy на `:8081` транскодирует HTTP/JSON ↔ gRPC (см. `TrB_backend/configs/envoy/envoy.yaml`).

## Зависимости пакета

- `google-protobuf`
- `grpc-web`

## Локальная разработка

```bash
# в TrB_proto
make gene
npm link

# во frontend-проекте
npm link @marleena/trb-proto
```

## Trusted Publisher (npm)

GitHub `Mar1eena` / `TrB_proto` / workflow `release.yml`.

[← Корневой README](../../README.md)
