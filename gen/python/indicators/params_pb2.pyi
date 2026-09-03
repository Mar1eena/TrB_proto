from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class MAType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    MA_TYPE_SMA: _ClassVar[MAType]
    MA_TYPE_EMA: _ClassVar[MAType]
    MA_TYPE_WMA: _ClassVar[MAType]
    MA_TYPE_DEMA: _ClassVar[MAType]
    MA_TYPE_TEMA: _ClassVar[MAType]
    MA_TYPE_TRIMA: _ClassVar[MAType]
    MA_TYPE_KAMA: _ClassVar[MAType]
    MA_TYPE_MAMA: _ClassVar[MAType]
    MA_TYPE_T3: _ClassVar[MAType]
MA_TYPE_SMA: MAType
MA_TYPE_EMA: MAType
MA_TYPE_WMA: MAType
MA_TYPE_DEMA: MAType
MA_TYPE_TEMA: MAType
MA_TYPE_TRIMA: MAType
MA_TYPE_KAMA: MAType
MA_TYPE_MAMA: MAType
MA_TYPE_T3: MAType

class HtDcPeriodParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class HtDcPhaseParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class HtPhasorParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class HtSineParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class HtTrendModeParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AddParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class DivParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class MaxParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class MaxIndexParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class MinParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class MinIndexParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class MinMaxParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class MinMaxIndexParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class MultParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class SubParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class SumParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class AcosParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AsinParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AtanParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CeilParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CosParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CoshParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ExpParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class FloorParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class LnParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class Log10Params(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class SinParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class SinhParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class SqrtParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class TanParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class TanhParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AcParams(_message.Message):
    __slots__ = ("fast_period", "slow_period", "signal_period")
    FAST_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SLOW_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SIGNAL_PERIOD_FIELD_NUMBER: _ClassVar[int]
    fast_period: int
    slow_period: int
    signal_period: int
    def __init__(self, fast_period: _Optional[int] = ..., slow_period: _Optional[int] = ..., signal_period: _Optional[int] = ...) -> None: ...

class AdxParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class AdxrParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class AoParams(_message.Message):
    __slots__ = ("fast_period", "slow_period")
    FAST_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SLOW_PERIOD_FIELD_NUMBER: _ClassVar[int]
    fast_period: int
    slow_period: int
    def __init__(self, fast_period: _Optional[int] = ..., slow_period: _Optional[int] = ...) -> None: ...

class ApoParams(_message.Message):
    __slots__ = ("fast_period", "slow_period", "ma_type")
    FAST_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SLOW_PERIOD_FIELD_NUMBER: _ClassVar[int]
    MA_TYPE_FIELD_NUMBER: _ClassVar[int]
    fast_period: int
    slow_period: int
    ma_type: MAType
    def __init__(self, fast_period: _Optional[int] = ..., slow_period: _Optional[int] = ..., ma_type: _Optional[_Union[MAType, str]] = ...) -> None: ...

class AroonParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class AroonOscParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class BopParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CciParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class CmoParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class CmouParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class DxParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class ImiParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class MacdParams(_message.Message):
    __slots__ = ("fast_period", "slow_period", "signal_period")
    FAST_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SLOW_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SIGNAL_PERIOD_FIELD_NUMBER: _ClassVar[int]
    fast_period: int
    slow_period: int
    signal_period: int
    def __init__(self, fast_period: _Optional[int] = ..., slow_period: _Optional[int] = ..., signal_period: _Optional[int] = ...) -> None: ...

class MacdExtParams(_message.Message):
    __slots__ = ("fast_period", "fast_ma_type", "slow_period", "slow_ma_type", "signal_period", "signal_ma_type")
    FAST_PERIOD_FIELD_NUMBER: _ClassVar[int]
    FAST_MA_TYPE_FIELD_NUMBER: _ClassVar[int]
    SLOW_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SLOW_MA_TYPE_FIELD_NUMBER: _ClassVar[int]
    SIGNAL_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SIGNAL_MA_TYPE_FIELD_NUMBER: _ClassVar[int]
    fast_period: int
    fast_ma_type: MAType
    slow_period: int
    slow_ma_type: MAType
    signal_period: int
    signal_ma_type: MAType
    def __init__(self, fast_period: _Optional[int] = ..., fast_ma_type: _Optional[_Union[MAType, str]] = ..., slow_period: _Optional[int] = ..., slow_ma_type: _Optional[_Union[MAType, str]] = ..., signal_period: _Optional[int] = ..., signal_ma_type: _Optional[_Union[MAType, str]] = ...) -> None: ...

class MacdFixParams(_message.Message):
    __slots__ = ("signal_period",)
    SIGNAL_PERIOD_FIELD_NUMBER: _ClassVar[int]
    signal_period: int
    def __init__(self, signal_period: _Optional[int] = ...) -> None: ...

class MfiParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class MinusDiParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class MinusDmParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class MomParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class PlusDiParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class PlusDmParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class PpoParams(_message.Message):
    __slots__ = ("fast_period", "slow_period", "ma_type")
    FAST_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SLOW_PERIOD_FIELD_NUMBER: _ClassVar[int]
    MA_TYPE_FIELD_NUMBER: _ClassVar[int]
    fast_period: int
    slow_period: int
    ma_type: MAType
    def __init__(self, fast_period: _Optional[int] = ..., slow_period: _Optional[int] = ..., ma_type: _Optional[_Union[MAType, str]] = ...) -> None: ...

class QstickParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class RocParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class RocpParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class RocrParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class Rocr100Params(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class RsiParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class SmiParams(_message.Message):
    __slots__ = ("period", "fast_period", "slow_period", "signal_period")
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    FAST_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SLOW_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SIGNAL_PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    fast_period: int
    slow_period: int
    signal_period: int
    def __init__(self, period: _Optional[int] = ..., fast_period: _Optional[int] = ..., slow_period: _Optional[int] = ..., signal_period: _Optional[int] = ...) -> None: ...

class StochParams(_message.Message):
    __slots__ = ("fast_k_period", "slow_k_period", "slow_k_ma_type", "slow_d_period", "slow_d_ma_type")
    FAST_K_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SLOW_K_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SLOW_K_MA_TYPE_FIELD_NUMBER: _ClassVar[int]
    SLOW_D_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SLOW_D_MA_TYPE_FIELD_NUMBER: _ClassVar[int]
    fast_k_period: int
    slow_k_period: int
    slow_k_ma_type: MAType
    slow_d_period: int
    slow_d_ma_type: MAType
    def __init__(self, fast_k_period: _Optional[int] = ..., slow_k_period: _Optional[int] = ..., slow_k_ma_type: _Optional[_Union[MAType, str]] = ..., slow_d_period: _Optional[int] = ..., slow_d_ma_type: _Optional[_Union[MAType, str]] = ...) -> None: ...

class StochFParams(_message.Message):
    __slots__ = ("fast_k_period", "fast_d_period", "fast_d_ma_type")
    FAST_K_PERIOD_FIELD_NUMBER: _ClassVar[int]
    FAST_D_PERIOD_FIELD_NUMBER: _ClassVar[int]
    FAST_D_MA_TYPE_FIELD_NUMBER: _ClassVar[int]
    fast_k_period: int
    fast_d_period: int
    fast_d_ma_type: MAType
    def __init__(self, fast_k_period: _Optional[int] = ..., fast_d_period: _Optional[int] = ..., fast_d_ma_type: _Optional[_Union[MAType, str]] = ...) -> None: ...

class StochRsiParams(_message.Message):
    __slots__ = ("period", "fast_k_period", "fast_d_period", "fast_d_ma_type")
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    FAST_K_PERIOD_FIELD_NUMBER: _ClassVar[int]
    FAST_D_PERIOD_FIELD_NUMBER: _ClassVar[int]
    FAST_D_MA_TYPE_FIELD_NUMBER: _ClassVar[int]
    period: int
    fast_k_period: int
    fast_d_period: int
    fast_d_ma_type: MAType
    def __init__(self, period: _Optional[int] = ..., fast_k_period: _Optional[int] = ..., fast_d_period: _Optional[int] = ..., fast_d_ma_type: _Optional[_Union[MAType, str]] = ...) -> None: ...

class TrixParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class UltOscParams(_message.Message):
    __slots__ = ("period1", "period2", "period3")
    PERIOD1_FIELD_NUMBER: _ClassVar[int]
    PERIOD2_FIELD_NUMBER: _ClassVar[int]
    PERIOD3_FIELD_NUMBER: _ClassVar[int]
    period1: int
    period2: int
    period3: int
    def __init__(self, period1: _Optional[int] = ..., period2: _Optional[int] = ..., period3: _Optional[int] = ...) -> None: ...

class WadParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class WillRParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class AccBandsParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class BbandsParams(_message.Message):
    __slots__ = ("period", "nb_dev_up", "nb_dev_dn", "ma_type")
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    NB_DEV_UP_FIELD_NUMBER: _ClassVar[int]
    NB_DEV_DN_FIELD_NUMBER: _ClassVar[int]
    MA_TYPE_FIELD_NUMBER: _ClassVar[int]
    period: int
    nb_dev_up: float
    nb_dev_dn: float
    ma_type: MAType
    def __init__(self, period: _Optional[int] = ..., nb_dev_up: _Optional[float] = ..., nb_dev_dn: _Optional[float] = ..., ma_type: _Optional[_Union[MAType, str]] = ...) -> None: ...

class DemaParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class EmaParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class HmaParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class HtTrendlineParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class KamaParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class KcParams(_message.Message):
    __slots__ = ("period", "atr_period", "nb_dev")
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    ATR_PERIOD_FIELD_NUMBER: _ClassVar[int]
    NB_DEV_FIELD_NUMBER: _ClassVar[int]
    period: int
    atr_period: int
    nb_dev: float
    def __init__(self, period: _Optional[int] = ..., atr_period: _Optional[int] = ..., nb_dev: _Optional[float] = ...) -> None: ...

class MaParams(_message.Message):
    __slots__ = ("period", "ma_type")
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    MA_TYPE_FIELD_NUMBER: _ClassVar[int]
    period: int
    ma_type: MAType
    def __init__(self, period: _Optional[int] = ..., ma_type: _Optional[_Union[MAType, str]] = ...) -> None: ...

class MamaParams(_message.Message):
    __slots__ = ("fast_limit", "slow_limit")
    FAST_LIMIT_FIELD_NUMBER: _ClassVar[int]
    SLOW_LIMIT_FIELD_NUMBER: _ClassVar[int]
    fast_limit: float
    slow_limit: float
    def __init__(self, fast_limit: _Optional[float] = ..., slow_limit: _Optional[float] = ...) -> None: ...

class MavpParams(_message.Message):
    __slots__ = ("min_period", "max_period", "ma_type")
    MIN_PERIOD_FIELD_NUMBER: _ClassVar[int]
    MAX_PERIOD_FIELD_NUMBER: _ClassVar[int]
    MA_TYPE_FIELD_NUMBER: _ClassVar[int]
    min_period: int
    max_period: int
    ma_type: MAType
    def __init__(self, min_period: _Optional[int] = ..., max_period: _Optional[int] = ..., ma_type: _Optional[_Union[MAType, str]] = ...) -> None: ...

class MidPointParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class MidPriceParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class SarParams(_message.Message):
    __slots__ = ("acceleration", "maximum")
    ACCELERATION_FIELD_NUMBER: _ClassVar[int]
    MAXIMUM_FIELD_NUMBER: _ClassVar[int]
    acceleration: float
    maximum: float
    def __init__(self, acceleration: _Optional[float] = ..., maximum: _Optional[float] = ...) -> None: ...

class SarExtParams(_message.Message):
    __slots__ = ("start_value", "offset_on_reverse", "acceleration_init_long", "acceleration_long", "acceleration_max_long", "acceleration_init_short", "acceleration_short", "acceleration_max_short")
    START_VALUE_FIELD_NUMBER: _ClassVar[int]
    OFFSET_ON_REVERSE_FIELD_NUMBER: _ClassVar[int]
    ACCELERATION_INIT_LONG_FIELD_NUMBER: _ClassVar[int]
    ACCELERATION_LONG_FIELD_NUMBER: _ClassVar[int]
    ACCELERATION_MAX_LONG_FIELD_NUMBER: _ClassVar[int]
    ACCELERATION_INIT_SHORT_FIELD_NUMBER: _ClassVar[int]
    ACCELERATION_SHORT_FIELD_NUMBER: _ClassVar[int]
    ACCELERATION_MAX_SHORT_FIELD_NUMBER: _ClassVar[int]
    start_value: float
    offset_on_reverse: float
    acceleration_init_long: float
    acceleration_long: float
    acceleration_max_long: float
    acceleration_init_short: float
    acceleration_short: float
    acceleration_max_short: float
    def __init__(self, start_value: _Optional[float] = ..., offset_on_reverse: _Optional[float] = ..., acceleration_init_long: _Optional[float] = ..., acceleration_long: _Optional[float] = ..., acceleration_max_long: _Optional[float] = ..., acceleration_init_short: _Optional[float] = ..., acceleration_short: _Optional[float] = ..., acceleration_max_short: _Optional[float] = ...) -> None: ...

class SmaParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class SuperTrendParams(_message.Message):
    __slots__ = ("period", "multiplier")
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    MULTIPLIER_FIELD_NUMBER: _ClassVar[int]
    period: int
    multiplier: float
    def __init__(self, period: _Optional[int] = ..., multiplier: _Optional[float] = ...) -> None: ...

class T3Params(_message.Message):
    __slots__ = ("period", "v_factor")
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    V_FACTOR_FIELD_NUMBER: _ClassVar[int]
    period: int
    v_factor: float
    def __init__(self, period: _Optional[int] = ..., v_factor: _Optional[float] = ...) -> None: ...

class TemaParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class TrimaParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class VwmaParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class WmaParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class Cdl2CrowsParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class Cdl3BlackCrowsParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class Cdl3InsideParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class Cdl3LineStrikeParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class Cdl3OutsideParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class Cdl3StarsInSouthParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class Cdl3WhiteSoldiersParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlAbandonedBabyParams(_message.Message):
    __slots__ = ("penetration",)
    PENETRATION_FIELD_NUMBER: _ClassVar[int]
    penetration: float
    def __init__(self, penetration: _Optional[float] = ...) -> None: ...

class CdlAdvanceBlockParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlBeltHoldParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlBreakawayParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlClosingMarubozuParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlConcealBabysWallParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlCounterAttackParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlDarkCloudCoverParams(_message.Message):
    __slots__ = ("penetration",)
    PENETRATION_FIELD_NUMBER: _ClassVar[int]
    penetration: float
    def __init__(self, penetration: _Optional[float] = ...) -> None: ...

class CdlDojiParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlDojiStarParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlDragonflyDojiParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlEngulfingParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlEveningDojiStarParams(_message.Message):
    __slots__ = ("penetration",)
    PENETRATION_FIELD_NUMBER: _ClassVar[int]
    penetration: float
    def __init__(self, penetration: _Optional[float] = ...) -> None: ...

class CdlEveningStarParams(_message.Message):
    __slots__ = ("penetration",)
    PENETRATION_FIELD_NUMBER: _ClassVar[int]
    penetration: float
    def __init__(self, penetration: _Optional[float] = ...) -> None: ...

class CdlGapSideSideWhiteParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlGravestoneDojiParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlHammerParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlHangingManParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlHaramiParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlHaramiCrossParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlHighWaveParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlHikkakeParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlHikkakeModParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlHomingPigeonParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlIdentical3CrowsParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlInNeckParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlInvertedHammerParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlKickingParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlKickingByLengthParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlLadderBottomParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlLongLeggedDojiParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlLongLineParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlMarubozuParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlMatchingLowParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlMatHoldParams(_message.Message):
    __slots__ = ("penetration",)
    PENETRATION_FIELD_NUMBER: _ClassVar[int]
    penetration: float
    def __init__(self, penetration: _Optional[float] = ...) -> None: ...

class CdlMorningDojiStarParams(_message.Message):
    __slots__ = ("penetration",)
    PENETRATION_FIELD_NUMBER: _ClassVar[int]
    penetration: float
    def __init__(self, penetration: _Optional[float] = ...) -> None: ...

class CdlMorningStarParams(_message.Message):
    __slots__ = ("penetration",)
    PENETRATION_FIELD_NUMBER: _ClassVar[int]
    penetration: float
    def __init__(self, penetration: _Optional[float] = ...) -> None: ...

class CdlOnNeckParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlPiercingParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlRickshawManParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlRiseFall3MethodsParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlSeparatingLinesParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlShootingStarParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlShortLineParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlSpinningTopParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlStalledPatternParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlStickSandwichParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlTakuriParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlTasukiGapParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlThrustingParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlTristarParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlUnique3RiverParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlUpsideGap2CrowsParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CdlXsideGap3MethodsParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AvgDevParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class AvgPriceParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class MedPriceParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class TypPriceParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class WclPriceParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class BetaParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class CorrelParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class LinearRegParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class LinearRegAngleParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class LinearRegInterceptParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class LinearRegSlopeParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class StdDevParams(_message.Message):
    __slots__ = ("period", "nb_dev")
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    NB_DEV_FIELD_NUMBER: _ClassVar[int]
    period: int
    nb_dev: float
    def __init__(self, period: _Optional[int] = ..., nb_dev: _Optional[float] = ...) -> None: ...

class TsfParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class VarParams(_message.Message):
    __slots__ = ("period", "nb_dev")
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    NB_DEV_FIELD_NUMBER: _ClassVar[int]
    period: int
    nb_dev: float
    def __init__(self, period: _Optional[int] = ..., nb_dev: _Optional[float] = ...) -> None: ...

class AtrParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class NatrParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class TrangeParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AdParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AdOscParams(_message.Message):
    __slots__ = ("fast_period", "slow_period")
    FAST_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SLOW_PERIOD_FIELD_NUMBER: _ClassVar[int]
    fast_period: int
    slow_period: int
    def __init__(self, fast_period: _Optional[int] = ..., slow_period: _Optional[int] = ...) -> None: ...

class CmfParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class EfiParams(_message.Message):
    __slots__ = ("period",)
    PERIOD_FIELD_NUMBER: _ClassVar[int]
    period: int
    def __init__(self, period: _Optional[int] = ...) -> None: ...

class MarketFiParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class NviParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ObvParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class PviParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class PvoParams(_message.Message):
    __slots__ = ("fast_period", "slow_period", "ma_type")
    FAST_PERIOD_FIELD_NUMBER: _ClassVar[int]
    SLOW_PERIOD_FIELD_NUMBER: _ClassVar[int]
    MA_TYPE_FIELD_NUMBER: _ClassVar[int]
    fast_period: int
    slow_period: int
    ma_type: MAType
    def __init__(self, fast_period: _Optional[int] = ..., slow_period: _Optional[int] = ..., ma_type: _Optional[_Union[MAType, str]] = ...) -> None: ...

class VwapParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class IndicatorSettings(_message.Message):
    __slots__ = ("rsi", "ht_dcperiod", "ht_dcphase", "ht_phasor", "ht_sine", "ht_trendmode", "add", "div", "max", "maxindex", "min", "minindex", "minmax", "minmaxindex", "mult", "sub", "sum", "acos", "asin", "atan", "ceil", "cos", "cosh", "exp", "floor", "ln", "log10", "sin", "sinh", "sqrt", "tan", "tanh", "ac", "adx", "adxr", "ao", "apo", "aroon", "aroonosc", "bop", "cci", "cmo", "cmou", "dx", "imi", "macd", "macdext", "macdfix", "mfi", "minus_di", "minus_dm", "mom", "plus_di", "plus_dm", "ppo", "qstick", "roc", "rocp", "rocr", "rocr100", "smi", "stoch", "stochf", "stochrsi", "trix", "ultosc", "wad", "willr", "accbands", "bbands", "dema", "ema", "hma", "ht_trendline", "kama", "kc", "ma", "mama", "mavp", "midpoint", "midprice", "sar", "sarext", "sma", "supertrend", "t3", "tema", "trima", "vwma", "wma", "cdl2crows", "cdl3blackcrows", "cdl3inside", "cdl3linestrike", "cdl3outside", "cdl3starsinsouth", "cdl3whitesoldiers", "cdlabandonedbaby", "cdladvanceblock", "cdlbelthold", "cdlbreakaway", "cdlclosingmarubozu", "cdlconcealbabyswall", "cdlcounterattack", "cdldarkcloudcover", "cdldoji", "cdldojistar", "cdldragonflydoji", "cdlengulfing", "cdleveningdojistar", "cdleveningstar", "cdlgapsidesidewhite", "cdlgravestonedoji", "cdlhammer", "cdlhangingman", "cdlharami", "cdlharamicross", "cdlhighwave", "cdlhikkake", "cdlhikkakemod", "cdlhomingpigeon", "cdlidentical3crows", "cdlinneck", "cdlinvertedhammer", "cdlkicking", "cdlkickingbylength", "cdlladderbottom", "cdllongleggeddoji", "cdllongline", "cdlmarubozu", "cdlmatchinglow", "cdlmathold", "cdlmorningdojistar", "cdlmorningstar", "cdlonneck", "cdlpiercing", "cdlrickshawman", "cdlrisefall3methods", "cdlseparatinglines", "cdlshootingstar", "cdlshortline", "cdlspinningtop", "cdlstalledpattern", "cdlsticksandwich", "cdltakuri", "cdltasukigap", "cdlthrusting", "cdltristar", "cdlunique3river", "cdlupsidegap2crows", "cdlxsidegap3methods", "avgdev", "avgprice", "medprice", "typprice", "wclprice", "beta", "correl", "linearreg", "linearreg_angle", "linearreg_intercept", "linearreg_slope", "stddev", "tsf", "var", "atr", "natr", "trange", "ad", "adosc", "cmf", "efi", "marketfi", "nvi", "obv", "pvi", "pvo", "vwap")
    RSI_FIELD_NUMBER: _ClassVar[int]
    HT_DCPERIOD_FIELD_NUMBER: _ClassVar[int]
    HT_DCPHASE_FIELD_NUMBER: _ClassVar[int]
    HT_PHASOR_FIELD_NUMBER: _ClassVar[int]
    HT_SINE_FIELD_NUMBER: _ClassVar[int]
    HT_TRENDMODE_FIELD_NUMBER: _ClassVar[int]
    ADD_FIELD_NUMBER: _ClassVar[int]
    DIV_FIELD_NUMBER: _ClassVar[int]
    MAX_FIELD_NUMBER: _ClassVar[int]
    MAXINDEX_FIELD_NUMBER: _ClassVar[int]
    MIN_FIELD_NUMBER: _ClassVar[int]
    MININDEX_FIELD_NUMBER: _ClassVar[int]
    MINMAX_FIELD_NUMBER: _ClassVar[int]
    MINMAXINDEX_FIELD_NUMBER: _ClassVar[int]
    MULT_FIELD_NUMBER: _ClassVar[int]
    SUB_FIELD_NUMBER: _ClassVar[int]
    SUM_FIELD_NUMBER: _ClassVar[int]
    ACOS_FIELD_NUMBER: _ClassVar[int]
    ASIN_FIELD_NUMBER: _ClassVar[int]
    ATAN_FIELD_NUMBER: _ClassVar[int]
    CEIL_FIELD_NUMBER: _ClassVar[int]
    COS_FIELD_NUMBER: _ClassVar[int]
    COSH_FIELD_NUMBER: _ClassVar[int]
    EXP_FIELD_NUMBER: _ClassVar[int]
    FLOOR_FIELD_NUMBER: _ClassVar[int]
    LN_FIELD_NUMBER: _ClassVar[int]
    LOG10_FIELD_NUMBER: _ClassVar[int]
    SIN_FIELD_NUMBER: _ClassVar[int]
    SINH_FIELD_NUMBER: _ClassVar[int]
    SQRT_FIELD_NUMBER: _ClassVar[int]
    TAN_FIELD_NUMBER: _ClassVar[int]
    TANH_FIELD_NUMBER: _ClassVar[int]
    AC_FIELD_NUMBER: _ClassVar[int]
    ADX_FIELD_NUMBER: _ClassVar[int]
    ADXR_FIELD_NUMBER: _ClassVar[int]
    AO_FIELD_NUMBER: _ClassVar[int]
    APO_FIELD_NUMBER: _ClassVar[int]
    AROON_FIELD_NUMBER: _ClassVar[int]
    AROONOSC_FIELD_NUMBER: _ClassVar[int]
    BOP_FIELD_NUMBER: _ClassVar[int]
    CCI_FIELD_NUMBER: _ClassVar[int]
    CMO_FIELD_NUMBER: _ClassVar[int]
    CMOU_FIELD_NUMBER: _ClassVar[int]
    DX_FIELD_NUMBER: _ClassVar[int]
    IMI_FIELD_NUMBER: _ClassVar[int]
    MACD_FIELD_NUMBER: _ClassVar[int]
    MACDEXT_FIELD_NUMBER: _ClassVar[int]
    MACDFIX_FIELD_NUMBER: _ClassVar[int]
    MFI_FIELD_NUMBER: _ClassVar[int]
    MINUS_DI_FIELD_NUMBER: _ClassVar[int]
    MINUS_DM_FIELD_NUMBER: _ClassVar[int]
    MOM_FIELD_NUMBER: _ClassVar[int]
    PLUS_DI_FIELD_NUMBER: _ClassVar[int]
    PLUS_DM_FIELD_NUMBER: _ClassVar[int]
    PPO_FIELD_NUMBER: _ClassVar[int]
    QSTICK_FIELD_NUMBER: _ClassVar[int]
    ROC_FIELD_NUMBER: _ClassVar[int]
    ROCP_FIELD_NUMBER: _ClassVar[int]
    ROCR_FIELD_NUMBER: _ClassVar[int]
    ROCR100_FIELD_NUMBER: _ClassVar[int]
    SMI_FIELD_NUMBER: _ClassVar[int]
    STOCH_FIELD_NUMBER: _ClassVar[int]
    STOCHF_FIELD_NUMBER: _ClassVar[int]
    STOCHRSI_FIELD_NUMBER: _ClassVar[int]
    TRIX_FIELD_NUMBER: _ClassVar[int]
    ULTOSC_FIELD_NUMBER: _ClassVar[int]
    WAD_FIELD_NUMBER: _ClassVar[int]
    WILLR_FIELD_NUMBER: _ClassVar[int]
    ACCBANDS_FIELD_NUMBER: _ClassVar[int]
    BBANDS_FIELD_NUMBER: _ClassVar[int]
    DEMA_FIELD_NUMBER: _ClassVar[int]
    EMA_FIELD_NUMBER: _ClassVar[int]
    HMA_FIELD_NUMBER: _ClassVar[int]
    HT_TRENDLINE_FIELD_NUMBER: _ClassVar[int]
    KAMA_FIELD_NUMBER: _ClassVar[int]
    KC_FIELD_NUMBER: _ClassVar[int]
    MA_FIELD_NUMBER: _ClassVar[int]
    MAMA_FIELD_NUMBER: _ClassVar[int]
    MAVP_FIELD_NUMBER: _ClassVar[int]
    MIDPOINT_FIELD_NUMBER: _ClassVar[int]
    MIDPRICE_FIELD_NUMBER: _ClassVar[int]
    SAR_FIELD_NUMBER: _ClassVar[int]
    SAREXT_FIELD_NUMBER: _ClassVar[int]
    SMA_FIELD_NUMBER: _ClassVar[int]
    SUPERTREND_FIELD_NUMBER: _ClassVar[int]
    T3_FIELD_NUMBER: _ClassVar[int]
    TEMA_FIELD_NUMBER: _ClassVar[int]
    TRIMA_FIELD_NUMBER: _ClassVar[int]
    VWMA_FIELD_NUMBER: _ClassVar[int]
    WMA_FIELD_NUMBER: _ClassVar[int]
    CDL2CROWS_FIELD_NUMBER: _ClassVar[int]
    CDL3BLACKCROWS_FIELD_NUMBER: _ClassVar[int]
    CDL3INSIDE_FIELD_NUMBER: _ClassVar[int]
    CDL3LINESTRIKE_FIELD_NUMBER: _ClassVar[int]
    CDL3OUTSIDE_FIELD_NUMBER: _ClassVar[int]
    CDL3STARSINSOUTH_FIELD_NUMBER: _ClassVar[int]
    CDL3WHITESOLDIERS_FIELD_NUMBER: _ClassVar[int]
    CDLABANDONEDBABY_FIELD_NUMBER: _ClassVar[int]
    CDLADVANCEBLOCK_FIELD_NUMBER: _ClassVar[int]
    CDLBELTHOLD_FIELD_NUMBER: _ClassVar[int]
    CDLBREAKAWAY_FIELD_NUMBER: _ClassVar[int]
    CDLCLOSINGMARUBOZU_FIELD_NUMBER: _ClassVar[int]
    CDLCONCEALBABYSWALL_FIELD_NUMBER: _ClassVar[int]
    CDLCOUNTERATTACK_FIELD_NUMBER: _ClassVar[int]
    CDLDARKCLOUDCOVER_FIELD_NUMBER: _ClassVar[int]
    CDLDOJI_FIELD_NUMBER: _ClassVar[int]
    CDLDOJISTAR_FIELD_NUMBER: _ClassVar[int]
    CDLDRAGONFLYDOJI_FIELD_NUMBER: _ClassVar[int]
    CDLENGULFING_FIELD_NUMBER: _ClassVar[int]
    CDLEVENINGDOJISTAR_FIELD_NUMBER: _ClassVar[int]
    CDLEVENINGSTAR_FIELD_NUMBER: _ClassVar[int]
    CDLGAPSIDESIDEWHITE_FIELD_NUMBER: _ClassVar[int]
    CDLGRAVESTONEDOJI_FIELD_NUMBER: _ClassVar[int]
    CDLHAMMER_FIELD_NUMBER: _ClassVar[int]
    CDLHANGINGMAN_FIELD_NUMBER: _ClassVar[int]
    CDLHARAMI_FIELD_NUMBER: _ClassVar[int]
    CDLHARAMICROSS_FIELD_NUMBER: _ClassVar[int]
    CDLHIGHWAVE_FIELD_NUMBER: _ClassVar[int]
    CDLHIKKAKE_FIELD_NUMBER: _ClassVar[int]
    CDLHIKKAKEMOD_FIELD_NUMBER: _ClassVar[int]
    CDLHOMINGPIGEON_FIELD_NUMBER: _ClassVar[int]
    CDLIDENTICAL3CROWS_FIELD_NUMBER: _ClassVar[int]
    CDLINNECK_FIELD_NUMBER: _ClassVar[int]
    CDLINVERTEDHAMMER_FIELD_NUMBER: _ClassVar[int]
    CDLKICKING_FIELD_NUMBER: _ClassVar[int]
    CDLKICKINGBYLENGTH_FIELD_NUMBER: _ClassVar[int]
    CDLLADDERBOTTOM_FIELD_NUMBER: _ClassVar[int]
    CDLLONGLEGGEDDOJI_FIELD_NUMBER: _ClassVar[int]
    CDLLONGLINE_FIELD_NUMBER: _ClassVar[int]
    CDLMARUBOZU_FIELD_NUMBER: _ClassVar[int]
    CDLMATCHINGLOW_FIELD_NUMBER: _ClassVar[int]
    CDLMATHOLD_FIELD_NUMBER: _ClassVar[int]
    CDLMORNINGDOJISTAR_FIELD_NUMBER: _ClassVar[int]
    CDLMORNINGSTAR_FIELD_NUMBER: _ClassVar[int]
    CDLONNECK_FIELD_NUMBER: _ClassVar[int]
    CDLPIERCING_FIELD_NUMBER: _ClassVar[int]
    CDLRICKSHAWMAN_FIELD_NUMBER: _ClassVar[int]
    CDLRISEFALL3METHODS_FIELD_NUMBER: _ClassVar[int]
    CDLSEPARATINGLINES_FIELD_NUMBER: _ClassVar[int]
    CDLSHOOTINGSTAR_FIELD_NUMBER: _ClassVar[int]
    CDLSHORTLINE_FIELD_NUMBER: _ClassVar[int]
    CDLSPINNINGTOP_FIELD_NUMBER: _ClassVar[int]
    CDLSTALLEDPATTERN_FIELD_NUMBER: _ClassVar[int]
    CDLSTICKSANDWICH_FIELD_NUMBER: _ClassVar[int]
    CDLTAKURI_FIELD_NUMBER: _ClassVar[int]
    CDLTASUKIGAP_FIELD_NUMBER: _ClassVar[int]
    CDLTHRUSTING_FIELD_NUMBER: _ClassVar[int]
    CDLTRISTAR_FIELD_NUMBER: _ClassVar[int]
    CDLUNIQUE3RIVER_FIELD_NUMBER: _ClassVar[int]
    CDLUPSIDEGAP2CROWS_FIELD_NUMBER: _ClassVar[int]
    CDLXSIDEGAP3METHODS_FIELD_NUMBER: _ClassVar[int]
    AVGDEV_FIELD_NUMBER: _ClassVar[int]
    AVGPRICE_FIELD_NUMBER: _ClassVar[int]
    MEDPRICE_FIELD_NUMBER: _ClassVar[int]
    TYPPRICE_FIELD_NUMBER: _ClassVar[int]
    WCLPRICE_FIELD_NUMBER: _ClassVar[int]
    BETA_FIELD_NUMBER: _ClassVar[int]
    CORREL_FIELD_NUMBER: _ClassVar[int]
    LINEARREG_FIELD_NUMBER: _ClassVar[int]
    LINEARREG_ANGLE_FIELD_NUMBER: _ClassVar[int]
    LINEARREG_INTERCEPT_FIELD_NUMBER: _ClassVar[int]
    LINEARREG_SLOPE_FIELD_NUMBER: _ClassVar[int]
    STDDEV_FIELD_NUMBER: _ClassVar[int]
    TSF_FIELD_NUMBER: _ClassVar[int]
    VAR_FIELD_NUMBER: _ClassVar[int]
    ATR_FIELD_NUMBER: _ClassVar[int]
    NATR_FIELD_NUMBER: _ClassVar[int]
    TRANGE_FIELD_NUMBER: _ClassVar[int]
    AD_FIELD_NUMBER: _ClassVar[int]
    ADOSC_FIELD_NUMBER: _ClassVar[int]
    CMF_FIELD_NUMBER: _ClassVar[int]
    EFI_FIELD_NUMBER: _ClassVar[int]
    MARKETFI_FIELD_NUMBER: _ClassVar[int]
    NVI_FIELD_NUMBER: _ClassVar[int]
    OBV_FIELD_NUMBER: _ClassVar[int]
    PVI_FIELD_NUMBER: _ClassVar[int]
    PVO_FIELD_NUMBER: _ClassVar[int]
    VWAP_FIELD_NUMBER: _ClassVar[int]
    rsi: RsiParams
    ht_dcperiod: HtDcPeriodParams
    ht_dcphase: HtDcPhaseParams
    ht_phasor: HtPhasorParams
    ht_sine: HtSineParams
    ht_trendmode: HtTrendModeParams
    add: AddParams
    div: DivParams
    max: MaxParams
    maxindex: MaxIndexParams
    min: MinParams
    minindex: MinIndexParams
    minmax: MinMaxParams
    minmaxindex: MinMaxIndexParams
    mult: MultParams
    sub: SubParams
    sum: SumParams
    acos: AcosParams
    asin: AsinParams
    atan: AtanParams
    ceil: CeilParams
    cos: CosParams
    cosh: CoshParams
    exp: ExpParams
    floor: FloorParams
    ln: LnParams
    log10: Log10Params
    sin: SinParams
    sinh: SinhParams
    sqrt: SqrtParams
    tan: TanParams
    tanh: TanhParams
    ac: AcParams
    adx: AdxParams
    adxr: AdxrParams
    ao: AoParams
    apo: ApoParams
    aroon: AroonParams
    aroonosc: AroonOscParams
    bop: BopParams
    cci: CciParams
    cmo: CmoParams
    cmou: CmouParams
    dx: DxParams
    imi: ImiParams
    macd: MacdParams
    macdext: MacdExtParams
    macdfix: MacdFixParams
    mfi: MfiParams
    minus_di: MinusDiParams
    minus_dm: MinusDmParams
    mom: MomParams
    plus_di: PlusDiParams
    plus_dm: PlusDmParams
    ppo: PpoParams
    qstick: QstickParams
    roc: RocParams
    rocp: RocpParams
    rocr: RocrParams
    rocr100: Rocr100Params
    smi: SmiParams
    stoch: StochParams
    stochf: StochFParams
    stochrsi: StochRsiParams
    trix: TrixParams
    ultosc: UltOscParams
    wad: WadParams
    willr: WillRParams
    accbands: AccBandsParams
    bbands: BbandsParams
    dema: DemaParams
    ema: EmaParams
    hma: HmaParams
    ht_trendline: HtTrendlineParams
    kama: KamaParams
    kc: KcParams
    ma: MaParams
    mama: MamaParams
    mavp: MavpParams
    midpoint: MidPointParams
    midprice: MidPriceParams
    sar: SarParams
    sarext: SarExtParams
    sma: SmaParams
    supertrend: SuperTrendParams
    t3: T3Params
    tema: TemaParams
    trima: TrimaParams
    vwma: VwmaParams
    wma: WmaParams
    cdl2crows: Cdl2CrowsParams
    cdl3blackcrows: Cdl3BlackCrowsParams
    cdl3inside: Cdl3InsideParams
    cdl3linestrike: Cdl3LineStrikeParams
    cdl3outside: Cdl3OutsideParams
    cdl3starsinsouth: Cdl3StarsInSouthParams
    cdl3whitesoldiers: Cdl3WhiteSoldiersParams
    cdlabandonedbaby: CdlAbandonedBabyParams
    cdladvanceblock: CdlAdvanceBlockParams
    cdlbelthold: CdlBeltHoldParams
    cdlbreakaway: CdlBreakawayParams
    cdlclosingmarubozu: CdlClosingMarubozuParams
    cdlconcealbabyswall: CdlConcealBabysWallParams
    cdlcounterattack: CdlCounterAttackParams
    cdldarkcloudcover: CdlDarkCloudCoverParams
    cdldoji: CdlDojiParams
    cdldojistar: CdlDojiStarParams
    cdldragonflydoji: CdlDragonflyDojiParams
    cdlengulfing: CdlEngulfingParams
    cdleveningdojistar: CdlEveningDojiStarParams
    cdleveningstar: CdlEveningStarParams
    cdlgapsidesidewhite: CdlGapSideSideWhiteParams
    cdlgravestonedoji: CdlGravestoneDojiParams
    cdlhammer: CdlHammerParams
    cdlhangingman: CdlHangingManParams
    cdlharami: CdlHaramiParams
    cdlharamicross: CdlHaramiCrossParams
    cdlhighwave: CdlHighWaveParams
    cdlhikkake: CdlHikkakeParams
    cdlhikkakemod: CdlHikkakeModParams
    cdlhomingpigeon: CdlHomingPigeonParams
    cdlidentical3crows: CdlIdentical3CrowsParams
    cdlinneck: CdlInNeckParams
    cdlinvertedhammer: CdlInvertedHammerParams
    cdlkicking: CdlKickingParams
    cdlkickingbylength: CdlKickingByLengthParams
    cdlladderbottom: CdlLadderBottomParams
    cdllongleggeddoji: CdlLongLeggedDojiParams
    cdllongline: CdlLongLineParams
    cdlmarubozu: CdlMarubozuParams
    cdlmatchinglow: CdlMatchingLowParams
    cdlmathold: CdlMatHoldParams
    cdlmorningdojistar: CdlMorningDojiStarParams
    cdlmorningstar: CdlMorningStarParams
    cdlonneck: CdlOnNeckParams
    cdlpiercing: CdlPiercingParams
    cdlrickshawman: CdlRickshawManParams
    cdlrisefall3methods: CdlRiseFall3MethodsParams
    cdlseparatinglines: CdlSeparatingLinesParams
    cdlshootingstar: CdlShootingStarParams
    cdlshortline: CdlShortLineParams
    cdlspinningtop: CdlSpinningTopParams
    cdlstalledpattern: CdlStalledPatternParams
    cdlsticksandwich: CdlStickSandwichParams
    cdltakuri: CdlTakuriParams
    cdltasukigap: CdlTasukiGapParams
    cdlthrusting: CdlThrustingParams
    cdltristar: CdlTristarParams
    cdlunique3river: CdlUnique3RiverParams
    cdlupsidegap2crows: CdlUpsideGap2CrowsParams
    cdlxsidegap3methods: CdlXsideGap3MethodsParams
    avgdev: AvgDevParams
    avgprice: AvgPriceParams
    medprice: MedPriceParams
    typprice: TypPriceParams
    wclprice: WclPriceParams
    beta: BetaParams
    correl: CorrelParams
    linearreg: LinearRegParams
    linearreg_angle: LinearRegAngleParams
    linearreg_intercept: LinearRegInterceptParams
    linearreg_slope: LinearRegSlopeParams
    stddev: StdDevParams
    tsf: TsfParams
    var: VarParams
    atr: AtrParams
    natr: NatrParams
    trange: TrangeParams
    ad: AdParams
    adosc: AdOscParams
    cmf: CmfParams
    efi: EfiParams
    marketfi: MarketFiParams
    nvi: NviParams
    obv: ObvParams
    pvi: PviParams
    pvo: PvoParams
    vwap: VwapParams
    def __init__(self, rsi: _Optional[_Union[RsiParams, _Mapping]] = ..., ht_dcperiod: _Optional[_Union[HtDcPeriodParams, _Mapping]] = ..., ht_dcphase: _Optional[_Union[HtDcPhaseParams, _Mapping]] = ..., ht_phasor: _Optional[_Union[HtPhasorParams, _Mapping]] = ..., ht_sine: _Optional[_Union[HtSineParams, _Mapping]] = ..., ht_trendmode: _Optional[_Union[HtTrendModeParams, _Mapping]] = ..., add: _Optional[_Union[AddParams, _Mapping]] = ..., div: _Optional[_Union[DivParams, _Mapping]] = ..., max: _Optional[_Union[MaxParams, _Mapping]] = ..., maxindex: _Optional[_Union[MaxIndexParams, _Mapping]] = ..., min: _Optional[_Union[MinParams, _Mapping]] = ..., minindex: _Optional[_Union[MinIndexParams, _Mapping]] = ..., minmax: _Optional[_Union[MinMaxParams, _Mapping]] = ..., minmaxindex: _Optional[_Union[MinMaxIndexParams, _Mapping]] = ..., mult: _Optional[_Union[MultParams, _Mapping]] = ..., sub: _Optional[_Union[SubParams, _Mapping]] = ..., sum: _Optional[_Union[SumParams, _Mapping]] = ..., acos: _Optional[_Union[AcosParams, _Mapping]] = ..., asin: _Optional[_Union[AsinParams, _Mapping]] = ..., atan: _Optional[_Union[AtanParams, _Mapping]] = ..., ceil: _Optional[_Union[CeilParams, _Mapping]] = ..., cos: _Optional[_Union[CosParams, _Mapping]] = ..., cosh: _Optional[_Union[CoshParams, _Mapping]] = ..., exp: _Optional[_Union[ExpParams, _Mapping]] = ..., floor: _Optional[_Union[FloorParams, _Mapping]] = ..., ln: _Optional[_Union[LnParams, _Mapping]] = ..., log10: _Optional[_Union[Log10Params, _Mapping]] = ..., sin: _Optional[_Union[SinParams, _Mapping]] = ..., sinh: _Optional[_Union[SinhParams, _Mapping]] = ..., sqrt: _Optional[_Union[SqrtParams, _Mapping]] = ..., tan: _Optional[_Union[TanParams, _Mapping]] = ..., tanh: _Optional[_Union[TanhParams, _Mapping]] = ..., ac: _Optional[_Union[AcParams, _Mapping]] = ..., adx: _Optional[_Union[AdxParams, _Mapping]] = ..., adxr: _Optional[_Union[AdxrParams, _Mapping]] = ..., ao: _Optional[_Union[AoParams, _Mapping]] = ..., apo: _Optional[_Union[ApoParams, _Mapping]] = ..., aroon: _Optional[_Union[AroonParams, _Mapping]] = ..., aroonosc: _Optional[_Union[AroonOscParams, _Mapping]] = ..., bop: _Optional[_Union[BopParams, _Mapping]] = ..., cci: _Optional[_Union[CciParams, _Mapping]] = ..., cmo: _Optional[_Union[CmoParams, _Mapping]] = ..., cmou: _Optional[_Union[CmouParams, _Mapping]] = ..., dx: _Optional[_Union[DxParams, _Mapping]] = ..., imi: _Optional[_Union[ImiParams, _Mapping]] = ..., macd: _Optional[_Union[MacdParams, _Mapping]] = ..., macdext: _Optional[_Union[MacdExtParams, _Mapping]] = ..., macdfix: _Optional[_Union[MacdFixParams, _Mapping]] = ..., mfi: _Optional[_Union[MfiParams, _Mapping]] = ..., minus_di: _Optional[_Union[MinusDiParams, _Mapping]] = ..., minus_dm: _Optional[_Union[MinusDmParams, _Mapping]] = ..., mom: _Optional[_Union[MomParams, _Mapping]] = ..., plus_di: _Optional[_Union[PlusDiParams, _Mapping]] = ..., plus_dm: _Optional[_Union[PlusDmParams, _Mapping]] = ..., ppo: _Optional[_Union[PpoParams, _Mapping]] = ..., qstick: _Optional[_Union[QstickParams, _Mapping]] = ..., roc: _Optional[_Union[RocParams, _Mapping]] = ..., rocp: _Optional[_Union[RocpParams, _Mapping]] = ..., rocr: _Optional[_Union[RocrParams, _Mapping]] = ..., rocr100: _Optional[_Union[Rocr100Params, _Mapping]] = ..., smi: _Optional[_Union[SmiParams, _Mapping]] = ..., stoch: _Optional[_Union[StochParams, _Mapping]] = ..., stochf: _Optional[_Union[StochFParams, _Mapping]] = ..., stochrsi: _Optional[_Union[StochRsiParams, _Mapping]] = ..., trix: _Optional[_Union[TrixParams, _Mapping]] = ..., ultosc: _Optional[_Union[UltOscParams, _Mapping]] = ..., wad: _Optional[_Union[WadParams, _Mapping]] = ..., willr: _Optional[_Union[WillRParams, _Mapping]] = ..., accbands: _Optional[_Union[AccBandsParams, _Mapping]] = ..., bbands: _Optional[_Union[BbandsParams, _Mapping]] = ..., dema: _Optional[_Union[DemaParams, _Mapping]] = ..., ema: _Optional[_Union[EmaParams, _Mapping]] = ..., hma: _Optional[_Union[HmaParams, _Mapping]] = ..., ht_trendline: _Optional[_Union[HtTrendlineParams, _Mapping]] = ..., kama: _Optional[_Union[KamaParams, _Mapping]] = ..., kc: _Optional[_Union[KcParams, _Mapping]] = ..., ma: _Optional[_Union[MaParams, _Mapping]] = ..., mama: _Optional[_Union[MamaParams, _Mapping]] = ..., mavp: _Optional[_Union[MavpParams, _Mapping]] = ..., midpoint: _Optional[_Union[MidPointParams, _Mapping]] = ..., midprice: _Optional[_Union[MidPriceParams, _Mapping]] = ..., sar: _Optional[_Union[SarParams, _Mapping]] = ..., sarext: _Optional[_Union[SarExtParams, _Mapping]] = ..., sma: _Optional[_Union[SmaParams, _Mapping]] = ..., supertrend: _Optional[_Union[SuperTrendParams, _Mapping]] = ..., t3: _Optional[_Union[T3Params, _Mapping]] = ..., tema: _Optional[_Union[TemaParams, _Mapping]] = ..., trima: _Optional[_Union[TrimaParams, _Mapping]] = ..., vwma: _Optional[_Union[VwmaParams, _Mapping]] = ..., wma: _Optional[_Union[WmaParams, _Mapping]] = ..., cdl2crows: _Optional[_Union[Cdl2CrowsParams, _Mapping]] = ..., cdl3blackcrows: _Optional[_Union[Cdl3BlackCrowsParams, _Mapping]] = ..., cdl3inside: _Optional[_Union[Cdl3InsideParams, _Mapping]] = ..., cdl3linestrike: _Optional[_Union[Cdl3LineStrikeParams, _Mapping]] = ..., cdl3outside: _Optional[_Union[Cdl3OutsideParams, _Mapping]] = ..., cdl3starsinsouth: _Optional[_Union[Cdl3StarsInSouthParams, _Mapping]] = ..., cdl3whitesoldiers: _Optional[_Union[Cdl3WhiteSoldiersParams, _Mapping]] = ..., cdlabandonedbaby: _Optional[_Union[CdlAbandonedBabyParams, _Mapping]] = ..., cdladvanceblock: _Optional[_Union[CdlAdvanceBlockParams, _Mapping]] = ..., cdlbelthold: _Optional[_Union[CdlBeltHoldParams, _Mapping]] = ..., cdlbreakaway: _Optional[_Union[CdlBreakawayParams, _Mapping]] = ..., cdlclosingmarubozu: _Optional[_Union[CdlClosingMarubozuParams, _Mapping]] = ..., cdlconcealbabyswall: _Optional[_Union[CdlConcealBabysWallParams, _Mapping]] = ..., cdlcounterattack: _Optional[_Union[CdlCounterAttackParams, _Mapping]] = ..., cdldarkcloudcover: _Optional[_Union[CdlDarkCloudCoverParams, _Mapping]] = ..., cdldoji: _Optional[_Union[CdlDojiParams, _Mapping]] = ..., cdldojistar: _Optional[_Union[CdlDojiStarParams, _Mapping]] = ..., cdldragonflydoji: _Optional[_Union[CdlDragonflyDojiParams, _Mapping]] = ..., cdlengulfing: _Optional[_Union[CdlEngulfingParams, _Mapping]] = ..., cdleveningdojistar: _Optional[_Union[CdlEveningDojiStarParams, _Mapping]] = ..., cdleveningstar: _Optional[_Union[CdlEveningStarParams, _Mapping]] = ..., cdlgapsidesidewhite: _Optional[_Union[CdlGapSideSideWhiteParams, _Mapping]] = ..., cdlgravestonedoji: _Optional[_Union[CdlGravestoneDojiParams, _Mapping]] = ..., cdlhammer: _Optional[_Union[CdlHammerParams, _Mapping]] = ..., cdlhangingman: _Optional[_Union[CdlHangingManParams, _Mapping]] = ..., cdlharami: _Optional[_Union[CdlHaramiParams, _Mapping]] = ..., cdlharamicross: _Optional[_Union[CdlHaramiCrossParams, _Mapping]] = ..., cdlhighwave: _Optional[_Union[CdlHighWaveParams, _Mapping]] = ..., cdlhikkake: _Optional[_Union[CdlHikkakeParams, _Mapping]] = ..., cdlhikkakemod: _Optional[_Union[CdlHikkakeModParams, _Mapping]] = ..., cdlhomingpigeon: _Optional[_Union[CdlHomingPigeonParams, _Mapping]] = ..., cdlidentical3crows: _Optional[_Union[CdlIdentical3CrowsParams, _Mapping]] = ..., cdlinneck: _Optional[_Union[CdlInNeckParams, _Mapping]] = ..., cdlinvertedhammer: _Optional[_Union[CdlInvertedHammerParams, _Mapping]] = ..., cdlkicking: _Optional[_Union[CdlKickingParams, _Mapping]] = ..., cdlkickingbylength: _Optional[_Union[CdlKickingByLengthParams, _Mapping]] = ..., cdlladderbottom: _Optional[_Union[CdlLadderBottomParams, _Mapping]] = ..., cdllongleggeddoji: _Optional[_Union[CdlLongLeggedDojiParams, _Mapping]] = ..., cdllongline: _Optional[_Union[CdlLongLineParams, _Mapping]] = ..., cdlmarubozu: _Optional[_Union[CdlMarubozuParams, _Mapping]] = ..., cdlmatchinglow: _Optional[_Union[CdlMatchingLowParams, _Mapping]] = ..., cdlmathold: _Optional[_Union[CdlMatHoldParams, _Mapping]] = ..., cdlmorningdojistar: _Optional[_Union[CdlMorningDojiStarParams, _Mapping]] = ..., cdlmorningstar: _Optional[_Union[CdlMorningStarParams, _Mapping]] = ..., cdlonneck: _Optional[_Union[CdlOnNeckParams, _Mapping]] = ..., cdlpiercing: _Optional[_Union[CdlPiercingParams, _Mapping]] = ..., cdlrickshawman: _Optional[_Union[CdlRickshawManParams, _Mapping]] = ..., cdlrisefall3methods: _Optional[_Union[CdlRiseFall3MethodsParams, _Mapping]] = ..., cdlseparatinglines: _Optional[_Union[CdlSeparatingLinesParams, _Mapping]] = ..., cdlshootingstar: _Optional[_Union[CdlShootingStarParams, _Mapping]] = ..., cdlshortline: _Optional[_Union[CdlShortLineParams, _Mapping]] = ..., cdlspinningtop: _Optional[_Union[CdlSpinningTopParams, _Mapping]] = ..., cdlstalledpattern: _Optional[_Union[CdlStalledPatternParams, _Mapping]] = ..., cdlsticksandwich: _Optional[_Union[CdlStickSandwichParams, _Mapping]] = ..., cdltakuri: _Optional[_Union[CdlTakuriParams, _Mapping]] = ..., cdltasukigap: _Optional[_Union[CdlTasukiGapParams, _Mapping]] = ..., cdlthrusting: _Optional[_Union[CdlThrustingParams, _Mapping]] = ..., cdltristar: _Optional[_Union[CdlTristarParams, _Mapping]] = ..., cdlunique3river: _Optional[_Union[CdlUnique3RiverParams, _Mapping]] = ..., cdlupsidegap2crows: _Optional[_Union[CdlUpsideGap2CrowsParams, _Mapping]] = ..., cdlxsidegap3methods: _Optional[_Union[CdlXsideGap3MethodsParams, _Mapping]] = ..., avgdev: _Optional[_Union[AvgDevParams, _Mapping]] = ..., avgprice: _Optional[_Union[AvgPriceParams, _Mapping]] = ..., medprice: _Optional[_Union[MedPriceParams, _Mapping]] = ..., typprice: _Optional[_Union[TypPriceParams, _Mapping]] = ..., wclprice: _Optional[_Union[WclPriceParams, _Mapping]] = ..., beta: _Optional[_Union[BetaParams, _Mapping]] = ..., correl: _Optional[_Union[CorrelParams, _Mapping]] = ..., linearreg: _Optional[_Union[LinearRegParams, _Mapping]] = ..., linearreg_angle: _Optional[_Union[LinearRegAngleParams, _Mapping]] = ..., linearreg_intercept: _Optional[_Union[LinearRegInterceptParams, _Mapping]] = ..., linearreg_slope: _Optional[_Union[LinearRegSlopeParams, _Mapping]] = ..., stddev: _Optional[_Union[StdDevParams, _Mapping]] = ..., tsf: _Optional[_Union[TsfParams, _Mapping]] = ..., var: _Optional[_Union[VarParams, _Mapping]] = ..., atr: _Optional[_Union[AtrParams, _Mapping]] = ..., natr: _Optional[_Union[NatrParams, _Mapping]] = ..., trange: _Optional[_Union[TrangeParams, _Mapping]] = ..., ad: _Optional[_Union[AdParams, _Mapping]] = ..., adosc: _Optional[_Union[AdOscParams, _Mapping]] = ..., cmf: _Optional[_Union[CmfParams, _Mapping]] = ..., efi: _Optional[_Union[EfiParams, _Mapping]] = ..., marketfi: _Optional[_Union[MarketFiParams, _Mapping]] = ..., nvi: _Optional[_Union[NviParams, _Mapping]] = ..., obv: _Optional[_Union[ObvParams, _Mapping]] = ..., pvi: _Optional[_Union[PviParams, _Mapping]] = ..., pvo: _Optional[_Union[PvoParams, _Mapping]] = ..., vwap: _Optional[_Union[VwapParams, _Mapping]] = ...) -> None: ...
