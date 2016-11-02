export class DataService {

    static $inject = ['$http', '$q'];

    constructor(
        private $http: ng.IHttpService, 
        private $q : ng.IQService
    ){}
    
    public request(method, url, body){
        return this.$http[method](url,body).then((response) => {
            return response.data;
        }, (error) => {
            return error;
        });      
    }

    public login(credentials): any {
        return this.request('post', '/api/login', credentials);
    }

    public createAssessment(theAssessment: Object): any {
        return this.request('post', '/api/assessment/create', theAssessment);                
    }
    
    public saveAssessment(theAssessment: Object): any {
        return this.request('post', '/api/assessment/save', theAssessment); 
    } 
    
    public submitAssessment(theAssessment: Object): any {
        return this.request('post', '/api/assessment/submit', theAssessment); 
    }        
    
    public assessmentList(): any {
        return this.request('get', '/api/assessment/list', null);     
    }    
    
    public getApplicationTypes():any {
        return this.request('get', '/api/assessment/applicationTypes', null);
    }

    public getLineOfBusiness():any {
        return this.request('get', '/api/assessment/lineOfBusiness', null);
    }

    public getEnvironmentTypes():any {
        return this.request('get', '/api/assessment/environments', null);
    }
    
    public getHostingLocations():any {
        return this.request('get', '/api/assessment/hostLocations', null);
    }   
    
    public getUserLocations():any {
        return this.request('get', '/api/assessment/userLocations', null);
    }        

    public getAssessmentDetails(assessmentIdParams: Object): any {
        return this.request('post', '/api/assessment/getAssessment', assessmentIdParams);
    }

    public canUserEditAssessment(assessmentIdParams: Object): any {
        return this.request('post', '/api/assessment/canUserEditAssessment', assessmentIdParams);
    }

    public canUserEditApprovalUpdates(assessmentIdParams: Object): any {
        return this.request('post', '/api/assessment/canUserEditApprovalUpdates', assessmentIdParams);
    }

    public getApprovalChain(environment: Object):any {
        return this.request('post', '/api/assessment/approvalChain', environment); 
    }
    
    public getQuestionnaire(assessmentId: Object):any {
        return this.request('post', '/api/assessment/questionnaire', assessmentId); 
    }

    public verifyApi(url,method,body):any {
        return this.request(method, url, body);
    }
}