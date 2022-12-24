import { AudioStreamer } from "jnaudiostream";
import { useEffect, useRef } from "react";

const useAudiostreamer = (socket) =>{
    const streamerRef = useRef(new AudioStreamer());

    useEffect(() => {
        const streamer = streamerRef.current;

        socket.on("bufferHeader", (packet) => {
            if(streamer.mediaBuffer){
                return;
            }

            streamer.setBufferHeader(packet);
            streamer.playStream();
        });


        socket.on("stream", (packet) => {
            if (!streamer.mediaBuffer) {
                return;
            }
            streamer.receiveBuffer(packet);
        });

        return () => {
            socket.off("bufferHeader");
            socket.off("stream");
        };
    })
}