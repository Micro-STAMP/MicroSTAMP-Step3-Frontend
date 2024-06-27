import AppRoutes from "@/routes";
import Toaster from "@components/Toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AppRoutes />
			<Toaster />
		</QueryClientProvider>
	);
}

export default App;
