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
              Puedes traer a {qty}{" "}
              {Number(qty) > 1 ? "acompañantes" : "acompañante"}.
            </div>
          )}
          {!full && <>{qty}</>}
        </>
      )}
    </>
  );
};

export default GuestQty;
