import heroImage from "../assets/hero-depilacao-masculina.svg";
import specialistImage from "../assets/especialista-depilacao-masculina.svg";
import procedureImage from "../assets/procedimento-depilacao-masculina.svg";
import environmentImage from "../assets/ambiente-atendimento-masculino.svg";
import storyPhoto from "../assets/photos/sessao-nossa-historia.png";
import contactPhoto from "../assets/photos/sessao-contatos.png";
import experiencePhoto from "../assets/photos/sessao-experiencia.png";

const baseUrl = import.meta.env.BASE_URL;

export const siteImages = {
  hero: heroImage,
  heroVideo: `${baseUrl}video/banner-principal.mp4`,
  specialist: storyPhoto,
  procedure: experiencePhoto,
  environment: contactPhoto,
  environmentFallback: environmentImage,
  specialistFallback: specialistImage,
  procedureFallback: procedureImage,
  social: `${baseUrl}og-image.svg`,
} as const;
