import "@progress/kendo-theme-material/dist/all.css";
import { TileLayout } from "@progress/kendo-react-layout";
import { useMemo, useState } from "react";
import './App.css';
import CryptoPrice from "./components/CryptoPrice";
import News from "./components/News";
import Tim from "./components/Tim";
import Weather from "./components/Weather";
import { Switch } from "@progress/kendo-react-inputs";
import Polygon from "./components/Polygon";
import Safemoon from "./components/Safemoon";
import Oakland from "./components/Oakland";
import Nasa from "./components/Nasa";

const initialPositions = [
  {
    widgetId: "1",
    col: 1,
    colSpan: 2,
    rowSpan: 3,
  },
  {
    widgetId: "2",
    col: 3,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    widgetId: "3",
    col: 4,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    widgetId: "4",
    col: 3,
    colSpan: 2,
    rowSpan: 3,
  },
  {
    widgetId: "5",
    col: 1,
    colSpan: 2,
    rowSpan:3,
  },
  {
    widgetId: "6",
    col: 3,
    colSpan: 2, 
    rowSpan: 3,
  },
  {
    widgetId: "7",
    col: 1,
    colSpan: 2,
    rowSpan: 3,
  },
  {
    widgetId: "8",
    col: 3,
    colSpan: 2,
    rowSpan:3,
  }
];

const getPositions = initialPositions => {
  // Try to get positions from local storage
  // If we have none in the storage then default to initial positions
  return (
    JSON/parseFloat(localStorage.getItem("dashboard-positions")) || initialPositions
  );
};

const widgetsConfig = [
  {
    id: "1",
    header: "News",
    body: <News />,
    active: true,
  },
  {
    id: "2",
    header: "Crypto",
    body: <CryptoPrice />,
    active: true,
  },
  {
    id: "3",
    header: "Weather",
    body: <Weather />,
    active: true,
  },
  {
    id: "4",
    header: "TimTheTatMan",
    body: <Tim />,
    active: true,
  },
  {
    id: "5",
    header: "Polygon",
    body: <Polygon />,
    active: true,
  },
  {
    id: "6",
    header: "Safemoon",
    body: <Safemoon />,
    active: true,
  },
  {
    id: "7",
    header: "NASA",
    body: <Nasa />,
    active: true,
  },
  {
    id: "8",
    header: "Oakland",
    body: <Oakland />,
    active: true,
  },
];

function App() {
  const [positions, setPosition] = useState(getPositions(initialPositions));
  const [widgets, setWidgets] = useState(widgetsConfig);

  const activeWidgets = useMemo(() => {
    return widgets.reduce((acc, widget) => {
      // Bail out if widget is not active
      if (!widget.active) return acc;
      // widget is active, so add it
      acc.push(widget);
      return acc;
    }, []);
  }, [widgets]);

  const filteredPositions = useMemo(() => {
    return positions.filter(position => {
      return activeWidgets.find(widget => widget.id === position.widgetId)
        ?.active;
    });
  }, [activeWidgets, positions]);

  const handleReposition = e => {
    setPosition(e.value);
    localStorage.setItem("dashboard-positions", JSON.stringify(e.value));
  };

  const onResetLayout = () => {
    setPosition(initialPositions);
    localStorage.setItem(
      "dashboard-positions",
      JSON.stringify(initialPositions)
    );
  };

  const onToggleWidget = e => {
    const { id } = e.target.props;
    const { value } = e.target;
    const updateWidgets = widgets.map(widget => {
      if (widget.id === id) {
        return {
          ...widget, 
          active: value,
        };
      }
      return widget;
    });
    setWidgets(updateWidgets);
  };

  return (
    <div className="App">
      <h1>Pi Dashboard - &pi;</h1>
      <div className="k-display-flex">
        <TileLayout
          className="tileLayout"
          columns={3}
          rowHeight={150}
          gap={{ rows: 10, columns: 10 }}
          positions={filteredPositions}
          items={activeWidgets}
          onReposition={handleReposition}
        />
        <aside className="k-ml-4 dashboardAside">
          <div className="k-ml-4">
            <button className="k-button" onClick={onResetLayout}>
              Reset layout
            </button>
          </div>
          <div>
            <h2 className="k-mb-4">Toggle Widgets</h2>
            <div>
              {widgets.map(widget => {
                return (
                  <div className="k-mb-2" key={widget.id}>
                    <Switch
                      checked={widget.active}
                      onChange={onToggleWidget}
                      id={widget.id}
                    />
                    <lable className="k-ml-3">{widget.header}</lable>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
