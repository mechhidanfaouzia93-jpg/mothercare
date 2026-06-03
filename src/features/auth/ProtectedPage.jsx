import { use } from "react";
import { Navigate } from "react-router";

import { IsConnectedAtom } from "../../atoms/auth.atom";
import { useAtomValue } from "jotai";

export const ProtectedPage = ({ children }) => {
    const isConnect = useAtomValue(IsConnectedAtom);
    if (!isConnect) {
        return <Navigate to="/auth/login" replace />;
    }
    return children;
}