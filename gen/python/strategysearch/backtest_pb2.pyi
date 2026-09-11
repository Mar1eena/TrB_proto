import datetime

from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Mapping as _Mapping
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
    __slots__ = ("uid", "interval", "start", "end", "initial_cash", "commission_pct", "slippage_pct", "long_only", "benchmark_uid")
    UID_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    START_FIELD_NUMBER: _ClassVar[int]
    END_FIELD_NUMBER: _ClassVar[int]
    INITIAL_CASH_FIELD_NUMBER: _ClassVar[int]
    COMMISSION_PCT_FIELD_NUMBER: _ClassVar[int]
    SLIPPAGE_PCT_FIELD_NUMBER: _ClassVar[int]
    LONG_ONLY_FIELD_NUMBER: _ClassVar[int]
    BENCHMARK_UID_FIELD_NUMBER: _ClassVar[int]
    uid: str
    interval: int
    start: _timestamp_pb2.Timestamp
    end: _timestamp_pb2.Timestamp
    initial_cash: float
    commission_pct: float
    slippage_pct: float
    long_only: bool
    benchmark_uid: str
    def __init__(self, uid: _Optional[str] = ..., interval: _Optional[int] = ..., start: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., end: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., initial_cash: _Optional[float] = ..., commission_pct: _Optional[float] = ..., slippage_pct: _Optional[float] = ..., long_only: bool = ..., benchmark_uid: _Optional[str] = ...) -> None: ...

class BacktestMetrics(_message.Message):
    __slots__ = ("total_return", "cagr", "sharpe", "sortino", "max_drawdown", "win_rate", "profit_factor", "sqn", "trades_count", "exposure", "final_equity", "avg_trade_pct", "expectancy", "calmar", "omega", "tail_ratio", "value_at_risk", "conditional_value_at_risk", "skew", "kurtosis", "kelly_criterion", "risk_of_ruin", "recovery_factor", "payoff_ratio", "gain_to_pain_ratio", "outlier_win_ratio", "outlier_loss_ratio", "common_sense_ratio", "ulcer_index", "serenity_index", "alpha", "beta", "information_ratio", "r_squared", "extra")
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
    CALMAR_FIELD_NUMBER: _ClassVar[int]
    OMEGA_FIELD_NUMBER: _ClassVar[int]
    TAIL_RATIO_FIELD_NUMBER: _ClassVar[int]
    VALUE_AT_RISK_FIELD_NUMBER: _ClassVar[int]
    CONDITIONAL_VALUE_AT_RISK_FIELD_NUMBER: _ClassVar[int]
    SKEW_FIELD_NUMBER: _ClassVar[int]
    KURTOSIS_FIELD_NUMBER: _ClassVar[int]
    KELLY_CRITERION_FIELD_NUMBER: _ClassVar[int]
    RISK_OF_RUIN_FIELD_NUMBER: _ClassVar[int]
    RECOVERY_FACTOR_FIELD_NUMBER: _ClassVar[int]
    PAYOFF_RATIO_FIELD_NUMBER: _ClassVar[int]
    GAIN_TO_PAIN_RATIO_FIELD_NUMBER: _ClassVar[int]
    OUTLIER_WIN_RATIO_FIELD_NUMBER: _ClassVar[int]
    OUTLIER_LOSS_RATIO_FIELD_NUMBER: _ClassVar[int]
    COMMON_SENSE_RATIO_FIELD_NUMBER: _ClassVar[int]
    ULCER_INDEX_FIELD_NUMBER: _ClassVar[int]
    SERENITY_INDEX_FIELD_NUMBER: _ClassVar[int]
    ALPHA_FIELD_NUMBER: _ClassVar[int]
    BETA_FIELD_NUMBER: _ClassVar[int]
    INFORMATION_RATIO_FIELD_NUMBER: _ClassVar[int]
    R_SQUARED_FIELD_NUMBER: _ClassVar[int]
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
    calmar: float
    omega: float
    tail_ratio: float
    value_at_risk: float
    conditional_value_at_risk: float
    skew: float
    kurtosis: float
    kelly_criterion: float
    risk_of_ruin: float
    recovery_factor: float
    payoff_ratio: float
    gain_to_pain_ratio: float
    outlier_win_ratio: float
    outlier_loss_ratio: float
    common_sense_ratio: float
    ulcer_index: float
    serenity_index: float
    alpha: float
    beta: float
    information_ratio: float
    r_squared: float
    extra: _containers.ScalarMap[str, float]
    def __init__(self, total_return: _Optional[float] = ..., cagr: _Optional[float] = ..., sharpe: _Optional[float] = ..., sortino: _Optional[float] = ..., max_drawdown: _Optional[float] = ..., win_rate: _Optional[float] = ..., profit_factor: _Optional[float] = ..., sqn: _Optional[float] = ..., trades_count: _Optional[int] = ..., exposure: _Optional[float] = ..., final_equity: _Optional[float] = ..., avg_trade_pct: _Optional[float] = ..., expectancy: _Optional[float] = ..., calmar: _Optional[float] = ..., omega: _Optional[float] = ..., tail_ratio: _Optional[float] = ..., value_at_risk: _Optional[float] = ..., conditional_value_at_risk: _Optional[float] = ..., skew: _Optional[float] = ..., kurtosis: _Optional[float] = ..., kelly_criterion: _Optional[float] = ..., risk_of_ruin: _Optional[float] = ..., recovery_factor: _Optional[float] = ..., payoff_ratio: _Optional[float] = ..., gain_to_pain_ratio: _Optional[float] = ..., outlier_win_ratio: _Optional[float] = ..., outlier_loss_ratio: _Optional[float] = ..., common_sense_ratio: _Optional[float] = ..., ulcer_index: _Optional[float] = ..., serenity_index: _Optional[float] = ..., alpha: _Optional[float] = ..., beta: _Optional[float] = ..., information_ratio: _Optional[float] = ..., r_squared: _Optional[float] = ..., extra: _Optional[_Mapping[str, float]] = ...) -> None: ...
