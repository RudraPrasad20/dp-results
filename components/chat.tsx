// import { useEffect, useState } from 'react';

// const useSocket = (url: string) => {
//   const [socket, setSocket] = useState<WebSocket | null>(null);

//   useEffect(() => {
//     const newSocket = new WebSocket(url);

//     newSocket.onopen = () => {
//       console.log('Connection established');
//     };

//     newSocket.onmessage = (message) => {
//       console.log('Message received:', message.data);
//     };

//     newSocket.onerror = (error) => {
//       console.error('WebSocket error:', error);
//     };

//     newSocket.onclose = () => {
//       console.log('WebSocket connection closed');
//     };

//     setSocket(newSocket);

//     return () => {
//       newSocket.close();
//     };
//   }, [url]);

//   const sendMessage = (message: string) => {
//     if (socket && socket.readyState === WebSocket.OPEN) {
//       socket.send(message);
//     } else {
//       console.error('WebSocket is not connected');
//     }
//   };

//   return { socket, sendMessage };
// };

// export default useSocket;