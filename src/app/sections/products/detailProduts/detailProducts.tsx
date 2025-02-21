export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>Producto ID: {params.id}</h1>
    </main>
  );
}
