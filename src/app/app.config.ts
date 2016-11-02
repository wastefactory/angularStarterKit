import 'angular';
import { HttpInterceptor } from './services/http.interceptor';

Config.$inject = ['$httpProvider'];

export default function Config (
    $httpProvider: ng.IHttpProvider
){
    $httpProvider.interceptors.push(HttpInterceptor);

}