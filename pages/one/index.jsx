import React from "react";
import ChartPart from "../../components/pages/one/ChartPart";
import EditPart from "../../components/pages/one/EditPart";
import Header from "../../components/pages/one/Header";
import WinnerPart from "../../components/pages/one/WinnerPart";

function One() {
  return (
    <div className="min-h-screen bg-slate-200">
      {/* header */}
      <Header />

      {/* Edit Part */}
      <EditPart />

      {/* winner List */}
      <WinnerPart />

      {/* table games */}
      <ChartPart />

      {/* paginations */}
    </div>
  );
}

export default One;
