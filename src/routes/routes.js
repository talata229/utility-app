import AuthGuard from "../app/auth";
import LayoutContainer from "../components/layout/LayoutContainer";

export const AllPages = () => {
  const all_routes = [
    {
      path: "/",
      element: (
        <AuthGuard>
          <LayoutContainer />
        </AuthGuard>
      ),
      
    },
    {
      path: "*",
      element: <div>not found</div>,
    },
  ];

  return all_routes;
}