import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username:string;
	private client_id = '1d0125927697cc3d93c9';
	private client_secret = '6cfa4145b0d2d706c3a0cd8be60a0068856a7542';

	constructor(private _http: Http){
		console.log('Github service ready..');
		this.username = "ojedawinder";
	}

	getUser(){
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
		.map(res => res.json());
	}

	getRepos(){
		return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
		.map(res => res.json());
	}

	updateUser(username:string){
		this.username = username;
	}

}