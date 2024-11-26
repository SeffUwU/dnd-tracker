export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
}
