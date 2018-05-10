import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	imagen: string;
	constructor(
		public navCtrl: NavController,
		public cameraPlugin: Camera,
		public alertCtrl: AlertController
	) {}

	takePicture(): void {
		const options: CameraOptions = {
			quality: 100,
			targetHeight: 1000,
			targetWidth: 1000,
			destinationType: this.cameraPlugin.DestinationType.DATA_URL,
			encodingType: this.cameraPlugin.EncodingType.JPEG,
			mediaType: this.cameraPlugin.MediaType.PICTURE
		};

		this.cameraPlugin.getPicture(options).then(
			(imageData) => {
				// imageData is either a base64 encoded string or a file URI
				// If it's base64:
				this.imagen = 'data:image/jpeg;base64,' + imageData;
				console.log(this.imagen);
			},
			(err) => {
				// Handle error
			}
		);
	}

	registrar(): void {
		let alert = this.alertCtrl.create({
			title: 'Exitoso',
			subTitle: 'Has quedado registrado',
			buttons: [ 'OK' ]
		});
		alert.present();
	}

	get validacion(): boolean {
		if (this.imagen == '') {
			return true;
		}
		return false;
	}
}
