from indicators import params_pb2 as _params_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PriceField(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PRICE_CLOSE: _ClassVar[PriceField]
    PRICE_OPEN: _ClassVar[PriceField]
    PRICE_HIGH: _ClassVar[PriceField]
    PRICE_LOW: _ClassVar[PriceField]
    PRICE_VOLUME: _ClassVar[PriceField]
    PRICE_HL2: _ClassVar[PriceField]
    PRICE_HLC3: _ClassVar[PriceField]
    PRICE_OHLC4: _ClassVar[PriceField]

class ArithOp(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ARITH_OP_ADD: _ClassVar[ArithOp]
    ARITH_OP_SUB: _ClassVar[ArithOp]
    ARITH_OP_MUL: _ClassVar[ArithOp]
    ARITH_OP_DIV: _ClassVar[ArithOp]

class CompareOp(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    COMPARE_OP_GT: _ClassVar[CompareOp]
    COMPARE_OP_GE: _ClassVar[CompareOp]
    COMPARE_OP_LT: _ClassVar[CompareOp]
    COMPARE_OP_LE: _ClassVar[CompareOp]
    COMPARE_OP_EQ: _ClassVar[CompareOp]
    COMPARE_OP_NE: _ClassVar[CompareOp]
    COMPARE_OP_CROSSES_ABOVE: _ClassVar[CompareOp]
    COMPARE_OP_CROSSES_BELOW: _ClassVar[CompareOp]
PRICE_CLOSE: PriceField
PRICE_OPEN: PriceField
PRICE_HIGH: PriceField
PRICE_LOW: PriceField
PRICE_VOLUME: PriceField
PRICE_HL2: PriceField
PRICE_HLC3: PriceField
PRICE_OHLC4: PriceField
ARITH_OP_ADD: ArithOp
ARITH_OP_SUB: ArithOp
ARITH_OP_MUL: ArithOp
ARITH_OP_DIV: ArithOp
COMPARE_OP_GT: CompareOp
COMPARE_OP_GE: CompareOp
COMPARE_OP_LT: CompareOp
COMPARE_OP_LE: CompareOp
COMPARE_OP_EQ: CompareOp
COMPARE_OP_NE: CompareOp
COMPARE_OP_CROSSES_ABOVE: CompareOp
COMPARE_OP_CROSSES_BELOW: CompareOp

class IndicatorRef(_message.Message):
    __slots__ = ("id", "settings", "output_key", "applied_to")
    ID_FIELD_NUMBER: _ClassVar[int]
    SETTINGS_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_KEY_FIELD_NUMBER: _ClassVar[int]
    APPLIED_TO_FIELD_NUMBER: _ClassVar[int]
    id: str
    settings: _params_pb2.IndicatorSettings
    output_key: str
    applied_to: PriceField
    def __init__(self, id: _Optional[str] = ..., settings: _Optional[_Union[_params_pb2.IndicatorSettings, _Mapping]] = ..., output_key: _Optional[str] = ..., applied_to: _Optional[_Union[PriceField, str]] = ...) -> None: ...

class ArithExpr(_message.Message):
    __slots__ = ("left", "op", "right")
    LEFT_FIELD_NUMBER: _ClassVar[int]
    OP_FIELD_NUMBER: _ClassVar[int]
    RIGHT_FIELD_NUMBER: _ClassVar[int]
    left: Operand
    op: ArithOp
    right: Operand
    def __init__(self, left: _Optional[_Union[Operand, _Mapping]] = ..., op: _Optional[_Union[ArithOp, str]] = ..., right: _Optional[_Union[Operand, _Mapping]] = ...) -> None: ...

class Operand(_message.Message):
    __slots__ = ("shift", "indicator_id", "price", "constant", "arith")
    SHIFT_FIELD_NUMBER: _ClassVar[int]
    INDICATOR_ID_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    CONSTANT_FIELD_NUMBER: _ClassVar[int]
    ARITH_FIELD_NUMBER: _ClassVar[int]
    shift: int
    indicator_id: str
    price: PriceField
    constant: float
    arith: ArithExpr
    def __init__(self, shift: _Optional[int] = ..., indicator_id: _Optional[str] = ..., price: _Optional[_Union[PriceField, str]] = ..., constant: _Optional[float] = ..., arith: _Optional[_Union[ArithExpr, _Mapping]] = ...) -> None: ...

class Comparison(_message.Message):
    __slots__ = ("left", "op", "right")
    LEFT_FIELD_NUMBER: _ClassVar[int]
    OP_FIELD_NUMBER: _ClassVar[int]
    RIGHT_FIELD_NUMBER: _ClassVar[int]
    left: Operand
    op: CompareOp
    right: Operand
    def __init__(self, left: _Optional[_Union[Operand, _Mapping]] = ..., op: _Optional[_Union[CompareOp, str]] = ..., right: _Optional[_Union[Operand, _Mapping]] = ...) -> None: ...

class BoolExpr(_message.Message):
    __slots__ = ("compare", "all", "any", "negate", "literal")
    COMPARE_FIELD_NUMBER: _ClassVar[int]
    ALL_FIELD_NUMBER: _ClassVar[int]
    ANY_FIELD_NUMBER: _ClassVar[int]
    NEGATE_FIELD_NUMBER: _ClassVar[int]
    LITERAL_FIELD_NUMBER: _ClassVar[int]
    compare: Comparison
    all: BoolList
    any: BoolList
    negate: BoolExpr
    literal: bool
    def __init__(self, compare: _Optional[_Union[Comparison, _Mapping]] = ..., all: _Optional[_Union[BoolList, _Mapping]] = ..., any: _Optional[_Union[BoolList, _Mapping]] = ..., negate: _Optional[_Union[BoolExpr, _Mapping]] = ..., literal: bool = ...) -> None: ...

class BoolList(_message.Message):
    __slots__ = ("operands",)
    OPERANDS_FIELD_NUMBER: _ClassVar[int]
    operands: _containers.RepeatedCompositeFieldContainer[BoolExpr]
    def __init__(self, operands: _Optional[_Iterable[_Union[BoolExpr, _Mapping]]] = ...) -> None: ...

class PositionSizing(_message.Message):
    __slots__ = ("fixed_cash", "percent_equity", "fixed_units", "risk_per_trade", "max_open_positions", "allow_pyramiding")
    FIXED_CASH_FIELD_NUMBER: _ClassVar[int]
    PERCENT_EQUITY_FIELD_NUMBER: _ClassVar[int]
    FIXED_UNITS_FIELD_NUMBER: _ClassVar[int]
    RISK_PER_TRADE_FIELD_NUMBER: _ClassVar[int]
    MAX_OPEN_POSITIONS_FIELD_NUMBER: _ClassVar[int]
    ALLOW_PYRAMIDING_FIELD_NUMBER: _ClassVar[int]
    fixed_cash: float
    percent_equity: float
    fixed_units: int
    risk_per_trade: float
    max_open_positions: int
    allow_pyramiding: bool
    def __init__(self, fixed_cash: _Optional[float] = ..., percent_equity: _Optional[float] = ..., fixed_units: _Optional[int] = ..., risk_per_trade: _Optional[float] = ..., max_open_positions: _Optional[int] = ..., allow_pyramiding: bool = ...) -> None: ...

class RiskControls(_message.Message):
    __slots__ = ("stop_loss_pct", "take_profit_pct", "trailing_stop", "trailing_pct", "time_stop_bars")
    STOP_LOSS_PCT_FIELD_NUMBER: _ClassVar[int]
    TAKE_PROFIT_PCT_FIELD_NUMBER: _ClassVar[int]
    TRAILING_STOP_FIELD_NUMBER: _ClassVar[int]
    TRAILING_PCT_FIELD_NUMBER: _ClassVar[int]
    TIME_STOP_BARS_FIELD_NUMBER: _ClassVar[int]
    stop_loss_pct: float
    take_profit_pct: float
    trailing_stop: bool
    trailing_pct: float
    time_stop_bars: int
    def __init__(self, stop_loss_pct: _Optional[float] = ..., take_profit_pct: _Optional[float] = ..., trailing_stop: bool = ..., trailing_pct: _Optional[float] = ..., time_stop_bars: _Optional[int] = ...) -> None: ...

class StrategySearchSpec(_message.Message):
    __slots__ = ("version", "indicators", "entry_long", "exit_long", "entry_short", "exit_short", "sizing", "risk", "warmup_bars")
    VERSION_FIELD_NUMBER: _ClassVar[int]
    INDICATORS_FIELD_NUMBER: _ClassVar[int]
    ENTRY_LONG_FIELD_NUMBER: _ClassVar[int]
    EXIT_LONG_FIELD_NUMBER: _ClassVar[int]
    ENTRY_SHORT_FIELD_NUMBER: _ClassVar[int]
    EXIT_SHORT_FIELD_NUMBER: _ClassVar[int]
    SIZING_FIELD_NUMBER: _ClassVar[int]
    RISK_FIELD_NUMBER: _ClassVar[int]
    WARMUP_BARS_FIELD_NUMBER: _ClassVar[int]
    version: int
    indicators: _containers.RepeatedCompositeFieldContainer[IndicatorRef]
    entry_long: BoolExpr
    exit_long: BoolExpr
    entry_short: BoolExpr
    exit_short: BoolExpr
    sizing: PositionSizing
    risk: RiskControls
    warmup_bars: int
    def __init__(self, version: _Optional[int] = ..., indicators: _Optional[_Iterable[_Union[IndicatorRef, _Mapping]]] = ..., entry_long: _Optional[_Union[BoolExpr, _Mapping]] = ..., exit_long: _Optional[_Union[BoolExpr, _Mapping]] = ..., entry_short: _Optional[_Union[BoolExpr, _Mapping]] = ..., exit_short: _Optional[_Union[BoolExpr, _Mapping]] = ..., sizing: _Optional[_Union[PositionSizing, _Mapping]] = ..., risk: _Optional[_Union[RiskControls, _Mapping]] = ..., warmup_bars: _Optional[int] = ...) -> None: ...
