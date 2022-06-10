import { createContext, useEffect ,useState} from "react";
import { createApiClient } from "core/api/apiClient";

export const AppContext = createContext();

const AppProvider = ({ authType, urlPortail, children }) => {
    const [apiClient,setApiClient] = useState(null)
	
	useEffect(() => {
		(async () => {
			const client = await createApiClient()
			setApiClient(client)
		})();
	 },[]);

     if (apiClient === null) return <div>Loading</div>;

     return (
        <AppContext.Provider value={apiClient}>
            {children}
        </AppContext.Provider>
     );
     }

     export default AppProvider;
