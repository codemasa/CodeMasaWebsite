
    /* eslint-disable */
    /* tslint:disable */
     
    import {assignImportedComponents} from 'react-imported-component';
    
    const applicationImports = {
0: () => import('./pages/About'),
1: () => import('./pages/Projects'),
    };
    
    assignImportedComponents(applicationImports);
    export default applicationImports;