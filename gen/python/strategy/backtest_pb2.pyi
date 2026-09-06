import datetime

from google.protobuf import timestamp_pb2 as _timestamp_pb2
from strategy import spec_pb2 as _spec_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class RunStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    RUN_STATUS_UNSPECIFIED: _ClassVar[RunStatus]
    RUN_QUEUED: _ClassVar[RunStatus]
    RUN_RUNNING: _ClassVar[RunStatus]
    RUN_SUCCEEDED: _ClassVar[RunStatus]
    RUN_FAILED: _ClassVar[RunStatus]
    RUN_CANCELED: _ClassVar[RunStatus]
RUN_STATUS_UNSPECIFIED: RunStatus
RUN_QUEUED: RunStatus
RUN_RUNNING: RunStatus
RUN_SUCCEEDED: RunStatus
RUN_FAILED: RunStatus
RUN_CANCELED: RunStatus

class BacktestConfig(_message.Message):
    __slots__ = ("uid", "interval", "start", "end", "initial_cash", "commission_pct", "slippage_pct", "long_only")
    UID_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    START_FIELD_NUMBER: _ClassVar[int]
    END_FIELD_NUMBER: _ClassVar[int]
    INITIAL_CASH_FIELD_NUMBER: _ClassVar[int]
    COMMISSION_PCT_FIELD_NUMBER: _ClassVar[int]
    SLIPPAGE_PCT_FIELD_NUMBER: _ClassVar[int]
    LONG_ONLY_FIELD_NUMBER: _ClassVar[int]
    uid: str
    interval: int
    start: _timestamp_pb2.Timestamp
    end: _timestamp_pb2.Timestamp
    initial_cash: float
    commission_pct: float
    slippage_pct: float
    long_only: bool
    def __init__(self, uid: _Optional[str] = ..., interval: _Optional[int] = ..., start: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., end: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., initial_cash: _Optional[float] = ..., commission_pct: _Optional[float] = ..., slippage_pct: _Optional[float] = ..., long_only: bool = ...) -> None: ...

class BacktestMetrics(_message.Message):
    __slots__ = ("total_return", "cagr", "sharpe", "sortino", "max_drawdown", "win_rate", "profit_factor", "sqn", "trades_count", "exposure", "final_equity", "avg_trade_pct", "expectancy", "extra")
    class ExtraEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    TOTAL_RETURN_FIELD_NUMBER: _ClassVar[int]
    CAGR_FIELD_NUMBER: _ClassVar[int]
    SHARPE_FIELD_NUMBER: _ClassVar[int]
    SORTINO_FIELD_NUMBER: _ClassVar[int]
    MAX_DRAWDOWN_FIELD_NUMBER: _ClassVar[int]
    WIN_RATE_FIELD_NUMBER: _ClassVar[int]
    PROFIT_FACTOR_FIELD_NUMBER: _ClassVar[int]
    SQN_FIELD_NUMBER: _ClassVar[int]
    TRADES_COUNT_FIELD_NUMBER: _ClassVar[int]
    EXPOSURE_FIELD_NUMBER: _ClassVar[int]
    FINAL_EQUITY_FIELD_NUMBER: _ClassVar[int]
    AVG_TRADE_PCT_FIELD_NUMBER: _ClassVar[int]
    EXPECTANCY_FIELD_NUMBER: _ClassVar[int]
    EXTRA_FIELD_NUMBER: _ClassVar[int]
    total_return: float
    cagr: float
    sharpe: float
    sortino: float
    max_drawdown: float
    win_rate: float
    profit_factor: float
    sqn: float
    trades_count: int
    exposure: float
    final_equity: float
    avg_trade_pct: float
    expectancy: float
    extra: _containers.ScalarMap[str, float]
    def __init__(self, total_return: _Optional[float] = ..., cagr: _Optional[float] = ..., sharpe: _Optional[float] = ..., sortino: _Optional[float] = ..., max_drawdown: _Optional[float] = ..., win_rate: _Optional[float] = ..., profit_factor: _Optional[float] = ..., sqn: _Optional[float] = ..., trades_count: _Optional[int] = ..., exposure: _Optional[float] = ..., final_equity: _Optional[float] = ..., avg_trade_pct: _Optional[float] = ..., expectancy: _Optional[float] = ..., extra: _Optional[_Mapping[str, float]] = ...) -> None: ...

class EquityPoint(_message.Message):
    __slots__ = ("time", "equity", "cash", "position_value", "drawdown", "ret")
    TIME_FIELD_NUMBER: _ClassVar[int]
    EQUITY_FIELD_NUMBER: _ClassVar[int]
    CASH_FIELD_NUMBER: _ClassVar[int]
    POSITION_VALUE_FIELD_NUMBER: _ClassVar[int]
    DRAWDOWN_FIELD_NUMBER: _ClassVar[int]
    RET_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    equity: float
    cash: float
    position_value: float
    drawdown: float
    ret: float
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., equity: _Optional[float] = ..., cash: _Optional[float] = ..., position_value: _Optional[float] = ..., drawdown: _Optional[float] = ..., ret: _Optional[float] = ...) -> None: ...

class TradeRecord(_message.Message):
    __slots__ = ("trade_id", "is_long", "entry_time", "entry_price", "exit_time", "exit_price", "size", "pnl", "pnl_pct", "bars_held", "mae", "mfe", "entry_reason", "exit_reason")
    TRADE_ID_FIELD_NUMBER: _ClassVar[int]
    IS_LONG_FIELD_NUMBER: _ClassVar[int]
    ENTRY_TIME_FIELD_NUMBER: _ClassVar[int]
    ENTRY_PRICE_FIELD_NUMBER: _ClassVar[int]
    EXIT_TIME_FIELD_NUMBER: _ClassVar[int]
    EXIT_PRICE_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    PNL_FIELD_NUMBER: _ClassVar[int]
    PNL_PCT_FIELD_NUMBER: _ClassVar[int]
    BARS_HELD_FIELD_NUMBER: _ClassVar[int]
    MAE_FIELD_NUMBER: _ClassVar[int]
    MFE_FIELD_NUMBER: _ClassVar[int]
    ENTRY_REASON_FIELD_NUMBER: _ClassVar[int]
    EXIT_REASON_FIELD_NUMBER: _ClassVar[int]
    trade_id: int
    is_long: bool
    entry_time: _timestamp_pb2.Timestamp
    entry_price: float
    exit_time: _timestamp_pb2.Timestamp
    exit_price: float
    size: float
    pnl: float
    pnl_pct: float
    bars_held: int
    mae: float
    mfe: float
    entry_reason: str
    exit_reason: str
    def __init__(self, trade_id: _Optional[int] = ..., is_long: bool = ..., entry_time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., entry_price: _Optional[float] = ..., exit_time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., exit_price: _Optional[float] = ..., size: _Optional[float] = ..., pnl: _Optional[float] = ..., pnl_pct: _Optional[float] = ..., bars_held: _Optional[int] = ..., mae: _Optional[float] = ..., mfe: _Optional[float] = ..., entry_reason: _Optional[str] = ..., exit_reason: _Optional[str] = ...) -> None: ...

class BacktestIndicatorPoint(_message.Message):
    __slots__ = ("time", "values")
    class ValuesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    TIME_FIELD_NUMBER: _ClassVar[int]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    values: _containers.ScalarMap[str, float]
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., values: _Optional[_Mapping[str, float]] = ...) -> None: ...

class BacktestIndicatorSeries(_message.Message):
    __slots__ = ("indicator_id", "indicator", "output_key", "overlay", "points")
    INDICATOR_ID_FIELD_NUMBER: _ClassVar[int]
    INDICATOR_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_KEY_FIELD_NUMBER: _ClassVar[int]
    OVERLAY_FIELD_NUMBER: _ClassVar[int]
    POINTS_FIELD_NUMBER: _ClassVar[int]
    indicator_id: str
    indicator: str
    output_key: str
    overlay: bool
    points: _containers.RepeatedCompositeFieldContainer[BacktestIndicatorPoint]
    def __init__(self, indicator_id: _Optional[str] = ..., indicator: _Optional[str] = ..., output_key: _Optional[str] = ..., overlay: bool = ..., points: _Optional[_Iterable[_Union[BacktestIndicatorPoint, _Mapping]]] = ...) -> None: ...

class BacktestRun(_message.Message):
    __slots__ = ("run_id", "strategy_id", "spec", "config", "status", "error", "engine_version", "search_run_id", "created_at", "started_at", "finished_at")
    RUN_ID_FIELD_NUMBER: _ClassVar[int]
    STRATEGY_ID_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    ENGINE_VERSION_FIELD_NUMBER: _ClassVar[int]
    SEARCH_RUN_ID_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    STARTED_AT_FIELD_NUMBER: _ClassVar[int]
    FINISHED_AT_FIELD_NUMBER: _ClassVar[int]
    run_id: str
    strategy_id: str
    spec: _spec_pb2.StrategySpec
    config: BacktestConfig
    status: RunStatus
    error: str
    engine_version: str
    search_run_id: str
    created_at: _timestamp_pb2.Timestamp
    started_at: _timestamp_pb2.Timestamp
    finished_at: _timestamp_pb2.Timestamp
    def __init__(self, run_id: _Optional[str] = ..., strategy_id: _Optional[str] = ..., spec: _Optional[_Union[_spec_pb2.StrategySpec, _Mapping]] = ..., config: _Optional[_Union[BacktestConfig, _Mapping]] = ..., status: _Optional[_Union[RunStatus, str]] = ..., error: _Optional[str] = ..., engine_version: _Optional[str] = ..., search_run_id: _Optional[str] = ..., created_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., started_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., finished_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class BacktestTask(_message.Message):
    __slots__ = ("run_id",)
    RUN_ID_FIELD_NUMBER: _ClassVar[int]
    run_id: str
    def __init__(self, run_id: _Optional[str] = ...) -> None: ...
