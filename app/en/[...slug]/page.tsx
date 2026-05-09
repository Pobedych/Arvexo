import { redirect } from "next/navigation";

type EnRedirectPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function EnRedirectPage({ params }: EnRedirectPageProps) {
  const { slug } = await params;

  redirect(`/${slug.join("/")}`);
}
