import GridLayout from "react-grid-layout";

export const Persona = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 12, h: 2, static: true },
    { i: "b", x: 2, y: 0, w: 3, h: 11, minW: 3, minH: 8, maxH: 8, maxW: 5 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
    { i: "d", x: 4, y: 0, w: 1, h: 2 },
  ];
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <div key="a" style={{ backgroundColor: "white" }}>
        Test data one{" "}
      </div>
      <div key="b" style={{ backgroundColor: "white" }}>
        Test data two{" "}
      </div>
      <div key="c" style={{ backgroundColor: "white" }}>
        Test data three{" "}
      </div>
      <div key="d" style={{ backgroundColor: "white" }}>
        Test data four{" "}
      </div>
    </GridLayout>
  );
};
