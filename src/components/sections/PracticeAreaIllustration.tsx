import Image from "next/image";

export type PracticeAreaVisual =
  | "military"
  | "family"
  | "deployment"
  | "conversation"
  | "benefits"
  | "location"
  | "equality"
  | "generations"
  | "property"
  | "separation"
  | "checklist"
  | "evidence"
  | "eye"
  | "order"
  | "shield"
  | "scales"
  | "vehicle";

export interface PracticeAreaPhoto {
  src: string;
  alt: string;
  /** CSS object-position used to keep the subject inside the crop. */
  position?: string;
}

const photo = (file: string, alt: string, position?: string): PracticeAreaPhoto => ({
  src: `/images/practice-areas/${file}.jpg`,
  alt,
  position,
});

export const practiceAreaPhotos: Record<PracticeAreaVisual, PracticeAreaPhoto> = {
  military: photo(
    "military-divorce",
    "A service member in dress uniform holding a white dress cap at their side",
    "62% 40%",
  ),
  family: photo(
    "child-support",
    "Two parents' hands gently cradling a young child's hand",
    "48% 55%",
  ),
  deployment: photo(
    "deployed-parents-custody",
    "A mother in a military uniform embracing her young daughter",
    "50% 38%",
  ),
  conversation: photo(
    "social-media-divorce",
    "People scrolling through social media on their smartphones",
    "58% 45%",
  ),
  benefits: photo(
    "military-retirement-benefits",
    "A Navy officer walking between saluting sideboys at a military retirement ceremony",
    "50% 42%",
  ),
  location: photo(
    "military-divorce-residency",
    "Aerial view of the Pensacola Beach shoreline at dusk",
    "50% 62%",
  ),
  equality: photo(
    "same-sex-marriage",
    "Two men's hands resting together, both wearing gold wedding bands",
    "45% 50%",
  ),
  generations: photo(
    "senior-citizen-divorce",
    "An older couple sitting on a bench looking out at the sea",
    "52% 62%",
  ),
  property: photo(
    "substantial-asset-divorce",
    "A large stone family residence at sunset",
    "50% 55%",
  ),
  separation: photo(
    "irretrievably-broken-marriage",
    "A couple sitting apart at opposite ends of a sofa, looking away from each other",
    "50% 55%",
  ),
  checklist: photo(
    "florida-divorce-process",
    "A person reviewing and signing paperwork at a desk",
    "50% 45%",
  ),
  evidence: photo("drug-trafficking", "Raised wrists held in metal handcuffs", "50% 42%"),
  eye: photo(
    "stalking",
    "A lone figure standing on a foggy street lit by streetlights at night",
    "40% 60%",
  ),
  order: photo(
    "domestic-violence-violation",
    "A wooden judge's gavel resting on its sound block",
    "58% 50%",
  ),
  shield: photo(
    "domestic-violence-injunction",
    "A wooden front door secured with a chain and padlock",
    "50% 45%",
  ),
  scales: photo(
    "sexual-assault",
    "A statue of Lady Justice holding the scales of justice",
    "56% 38%",
  ),
  vehicle: photo(
    "dui",
    "Red and blue lights flashing on a police light bar at night",
    "50% 50%",
  ),
};

export function PracticeAreaPhotoImage({
  photo: image,
  sizes,
  decorative = false,
}: {
  photo: PracticeAreaPhoto;
  sizes: string;
  decorative?: boolean;
}) {
  return (
    <Image
      alt={decorative ? "" : image.alt}
      className="practice-photo-image"
      fill
      sizes={sizes}
      src={image.src}
      style={image.position ? { objectPosition: image.position } : undefined}
    />
  );
}

export function PracticeAreaIllustration({
  visual,
  sizes = "(max-width: 740px) calc(100vw - 40px), 420px",
  decorative = false,
  active,
}: {
  visual: PracticeAreaVisual;
  sizes?: string;
  decorative?: boolean;
  active?: boolean;
}) {
  return (
    <figure
      className={`practice-artwork practice-artwork-${visual}`}
      data-active={active === undefined ? undefined : String(active)}
    >
      <PracticeAreaPhotoImage decorative={decorative} photo={practiceAreaPhotos[visual]} sizes={sizes} />
    </figure>
  );
}
