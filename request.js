import XHTTPREQUEST from 'xhr2';
import { sendTelegramMessageBot } from './messagebot.js';
export const request = (url) => {
	
	try{
	
		let req = new XHTTPREQUEST();
		
		req.open('GET', url, true);
		
		req.onload = function() {
			if(req.status === 200) {
				console.log(`${new Date().toLocaleString()} ${url} OK`);
			}
			else{
				console.log(`${new Date().toLocaleString()} Error al intentar acceder a ${url}, codigo de estado ${req.status}`);
			}
		}
		
		req.onerror = function() {
			console.log(`${new Date().toLocaleString()} Error no se pudo acceder a ${url}`);
			console.log(`Enviando mensaje a telegram...`);
			sendTelegramMessageBot(`${new Date().toLocaleString()} Error no se pudo acceder a ${url}`)
		}
		
		req.send();
	
	}catch(e){
		console.log(`${new Date().toLocaleString()} Error la pagina no esta disponible o no existe`);
	}
}



