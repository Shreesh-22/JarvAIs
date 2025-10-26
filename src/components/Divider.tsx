const Divider = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-4 text-muted-foreground text-2xl">⸻</div>
      <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
};

export default Divider;