import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Loader2 className="animate-spin" />
      Please wait...
    </div>
  );
};

export default Loading;
