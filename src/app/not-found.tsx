import { Button, Heading, Text } from "@/components/ui";

/**
 * Global 404. Kept simple and self-contained (root not-found renders outside
 * route-group layouts), with clear paths back into the site.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <Text variant="caption" tone="muted" as="span">
        404
      </Text>
      <Heading level={1} size="h1">
        Page not found
      </Heading>
      <Text variant="bodyLg" tone="muted" className="max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </Text>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back to home</Button>
        <Button href="/services" variant="ghost">
          Browse services
        </Button>
      </div>
    </main>
  );
}
