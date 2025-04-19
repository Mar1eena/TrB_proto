
©
server/server.protoservergoogle/api/annotations.proto"$
MessageRequest
text (	Rtext"'
MessageResponse
reply (	Rreply"%
PoliceRequest
token (	Rtoken"@
PoliceResponse
token (	Rtoken
message (	Rmessage"h
PoliceStreamResponse
update (	Rupdate
severity (Rseverity
	timestamp (	R	timestamp"L
ClientStreamRequest
	client_id (	RclientId
payload (Rpayload"W
StreamSummary%
total_requests (RtotalRequests
total_bytes (R
totalBytes"d
BidirectionalMessage
sender (	Rsender
content (	Rcontent
sequence (Rsequence2ß
ExampleServiceO
SendMessage.server.MessageRequest.server.MessageResponse"Ç”‰ì	"/say:*;

SendPolice.server.PoliceRequest.server.PoliceResponse`
StreamPoliceUpdates.server.PoliceRequest.server.PoliceStreamResponse"Ç”‰ì"/stream:*0N
ClientStreamingExample.server.ClientStreamRequest.server.StreamSummary(U
BidirectionalStream.server.BidirectionalMessage.server.BidirectionalMessage(0BZ	src/protobproto3