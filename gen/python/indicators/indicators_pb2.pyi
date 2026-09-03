import datetime

from google.api import annotations_pb2 as _annotations_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from indicators import params_pb2 as _params_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Settings(_message.Message):
    __slots__ = ("interval", "uid", "settings", "start", "end")
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    UID_FIELD_NUMBER: _ClassVar[int]
    SETTINGS_FIELD_NUMBER: _ClassVar[int]
    START_FIELD_NUMBER: _ClassVar[int]
    END_FIELD_NUMBER: _ClassVar[int]
    interval: int
    uid: str
    settings: _params_pb2.IndicatorSettings
    start: _timestamp_pb2.Timestamp
    end: _timestamp_pb2.Timestamp
    def __init__(self, interval: _Optional[int] = ..., uid: _Optional[str] = ..., settings: _Optional[_Union[_params_pb2.IndicatorSettings, _Mapping]] = ..., start: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., end: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class SettingsHash(_message.Message):
    __slots__ = ("hash",)
    HASH_FIELD_NUMBER: _ClassVar[int]
    hash: int
    def __init__(self, hash: _Optional[int] = ...) -> None: ...

class DeleteSettingsResponse(_message.Message):
    __slots__ = ("hash", "delete")
    HASH_FIELD_NUMBER: _ClassVar[int]
    DELETE_FIELD_NUMBER: _ClassVar[int]
    hash: int
    delete: bool
    def __init__(self, hash: _Optional[int] = ..., delete: bool = ...) -> None: ...

class UpdateSettingsResponse(_message.Message):
    __slots__ = ("hash", "update")
    HASH_FIELD_NUMBER: _ClassVar[int]
    UPDATE_FIELD_NUMBER: _ClassVar[int]
    hash: int
    update: bool
    def __init__(self, hash: _Optional[int] = ..., update: bool = ...) -> None: ...
