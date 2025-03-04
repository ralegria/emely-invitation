const GuestQty = ({
  qty,
  full = true,
}: {
  qty: number | undefined;
  full?: boolean;
}) => {
  return (
    <>
      {Number(qty) >= 1 && (
        <>
          {full && (
            <div className="underline">
              Hemos reservado {qty} {Number(qty) > 1 ? "espacios" : "espacio"}{" "}
              para ti.
            </div>
          )}
          {!full && <>{qty}</>}
        </>
      )}
    </>
  );
};

export default GuestQty;
