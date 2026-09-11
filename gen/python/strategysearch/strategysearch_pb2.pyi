from google.api import annotations_pb2 as _annotations_pb2
from strategysearch import spec_pb2 as _spec_pb2
from strategysearch import backtest_pb2 as _backtest_pb2
from strategysearch import search_pb2 as _search_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SubmitSearchRequest(_message.Message):
    __slots__ = ("name", "base_spec", "search_space", "study", "config")
    NAME_FIELD_NUMBER: _ClassVar[int]
    BASE_SPEC_FIELD_NUMBER: _ClassVar[int]
    SEARCH_SPACE_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    name: str
    base_spec: _spec_pb2.StrategySearchSpec
    search_space: _containers.RepeatedCompositeFieldContainer[_search_pb2.ParamRange]
    study: _search_pb2.StudyConfig
    config: _backtest_pb2.BacktestConfig
    def __init__(self, name: _Optional[str] = ..., base_spec: _Optional[_Union[_spec_pb2.StrategySearchSpec, _Mapping]] = ..., search_space: _Optional[_Iterable[_Union[_search_pb2.ParamRange, _Mapping]]] = ..., study: _Optional[_Union[_search_pb2.StudyConfig, _Mapping]] = ..., config: _Optional[_Union[_backtest_pb2.BacktestConfig, _Mapping]] = ...) -> None: ...

class SubmitSearchResponse(_message.Message):
    __slots__ = ("search_id", "status")
    SEARCH_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    search_id: str
    status: _backtest_pb2.RunStatus
    def __init__(self, search_id: _Optional[str] = ..., status: _Optional[_Union[_backtest_pb2.RunStatus, str]] = ...) -> None: ...

class GetSearchProgressRequest(_message.Message):
    __slots__ = ("search_id",)
    SEARCH_ID_FIELD_NUMBER: _ClassVar[int]
    search_id: str
    def __init__(self, search_id: _Optional[str] = ...) -> None: ...

class GetBestTrialsRequest(_message.Message):
    __slots__ = ("search_id", "top_k")
    SEARCH_ID_FIELD_NUMBER: _ClassVar[int]
    TOP_K_FIELD_NUMBER: _ClassVar[int]
    search_id: str
    top_k: int
    def __init__(self, search_id: _Optional[str] = ..., top_k: _Optional[int] = ...) -> None: ...

class GetBestTrialsResponse(_message.Message):
    __slots__ = ("items",)
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_search_pb2.Trial]
    def __init__(self, items: _Optional[_Iterable[_Union[_search_pb2.Trial, _Mapping]]] = ...) -> None: ...

class ListSearchesRequest(_message.Message):
    __slots__ = ("status", "limit", "offset")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    OFFSET_FIELD_NUMBER: _ClassVar[int]
    status: _backtest_pb2.RunStatus
    limit: int
    offset: int
    def __init__(self, status: _Optional[_Union[_backtest_pb2.RunStatus, str]] = ..., limit: _Optional[int] = ..., offset: _Optional[int] = ...) -> None: ...

class ListSearchesResponse(_message.Message):
    __slots__ = ("items", "total")
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_search_pb2.SearchRun]
    total: int
    def __init__(self, items: _Optional[_Iterable[_Union[_search_pb2.SearchRun, _Mapping]]] = ..., total: _Optional[int] = ...) -> None: ...

class CancelSearchRequest(_message.Message):
    __slots__ = ("search_id",)
    SEARCH_ID_FIELD_NUMBER: _ClassVar[int]
    search_id: str
    def __init__(self, search_id: _Optional[str] = ...) -> None: ...
