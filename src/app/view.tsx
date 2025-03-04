import Image from "next/image";
import MainCarousel from "../components/Carousel";
import MapsDrawer from "../components/MapsDrawer";
import DressCodeGrid from "../components/DressCodeGrid";
/* import { Collapse } from "antd"; */
import GuestQty from "../components/GuestQty";
import Brave from "@/components/Audio";

interface ViewProps {
  guests?: number;
}

const MainView = ({ guests }: ViewProps) => {
  /* const FAQs = [
    {
      key: "1",
      label: "¿Puedo llevar a una persona extra?",
      children: (
        <>
          La invitación es para la cantidad de personas previamente asignadas.
          {guests && (
            <>
              En tu caso, <GuestQty qty={guests} />
            </>
          )}
        </>
      ),
    },
    {
      key: "2",
      label: "¿Regalo de sobre o libre?",
      children: "TBD",
    },
    {
      key: "3",
      label: "¿Es cena bailable?",
      children:
        "Si, es cena con un espacio para que todos disfrutemos bailando",
    },
    {
      key: "4",
      label: "¿Es fiesta apta para niños?",
      children: "Si, es una fiesta de ambiente familiar",
    },
  ]; */

  return (
    <div className="flex flex-col items-center">
      <Brave>
        <div className="flex flex-col font-[family-name:var(--font-hahmlet)] w-full sm:max-w-[450px]">
          <div className="flex flex-col gap-[24px] items-center p-[40px_24px] bg-[url(/icons/green-flower-icon.svg)] bg-no-repeat bg-contain bg-[left_top_50px]">
            <Image
              src={"/icons/rose-icon.svg"}
              width={52}
              height={96}
              alt="Rose Icon"
            />
            <div className="flex flex-col gap-[16px] items-center bg-[url(/shadows/green-shadow.png)] bg-no-repeat bg-contain bg-[center_top_-60px]">
              <h1>Mi Historia</h1>
              <p className="text-center text-[14px] font-light">
                Mi historia comienza así…
                <br />
                <br /> Hace varios años comenzó mi historia en esta familia. No
                tengo la noción de aquellos primeros momentos, pero sé que fue
                un inicio caótico: entre una apendicitis y el embarazo de mi
                mamá, este caos dio paso al comienzo de una vida llena de
                alegrías, desafíos y enojos. Sumando momentos de aprendizaje
                junto al resto de mi familia. A lo largo de los años y con la
                ayuda de amistades y seres queridos, he creado aventuras
                cotidianas que me han ayudado a crecer.
                <br />
                <br />
                Estos quince años han estado llenos de momentos significativos,
                en los que he tenido la fortuna de contar con mis padres y
                hermanos. Hemos festejado juntos las victorias y enfrentado los
                desafíos que la vida nos ha puesto en el camino, y sin olvidar
                esas amistades que están presentes siempre. Ahora entiendo la
                importancia de los recuerdos. Teniendo a tantas personas a las
                que quiero, aunque no las vea tan seguido como me gustaría.
                Personas que se preocupan por mí, que me aconsejan con cariño,
                que desean mi bienestar. Personas que han soportado mis malos
                días y han celebrado conmigo los buenos. Hoy me acordé de
                ustedes, porque los tengo presente.
                <br />
                <br />Y especialmente, <b>me acordé de ti</b>. Porque has estado
                presente durante estos años, me has acompañado, y deseo que
                también estés conmigo en esta noche tan especial, en la que
                celebro mis 15 años.
                <br />
                <br />Y por eso, hoy quiero detenerme un momento para *darte las
                gracias*. No hay palabras que puedan describir lo que significa
                para mí tenerlos a mi lado, acompañándome en este viaje llamado
                vida. Estoy profundamente ansiosa por compartir mi celebración y
                por seguir construyendo recuerdos juntos.
                <br />
                <br />
                ¡Gracias por ser parte de mi historia!
              </p>
            </div>
            <div className="block w-full">
              <MainCarousel />
            </div>
          </div>
          <div className="flex flex-col gap-[40px] items-center p-[40px_24px]">
            <div className="flex flex-col gap-[8px] items-center">
              <h4>Por eso...</h4>
              <h2 className="text-center">¡Celebremos mis 15 años!</h2>
              <p className="text-center text-[14px] font-light">
                Estoy emocionada de compartir este momento tan especial contigo.
              </p>
            </div>
            <div className="bg-[url(/bgs/info-bg-mobile.png)] bg-no-repeat bg-cover bg-[100%_center] w-full h-[593px] rounded-[20px] flex flex-col gap-[24px] justify-end p-[24px]">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <h3 className="text-[28px] font-medium">
                    Sábado 22 de Marzo
                  </h3>
                  <h4 className="text-[20px] font-light">Hora: 6:00 PM</h4>
                </div>
                <p className="font-light text-[16px]">
                  En Alegr&iacute;a Eventos
                </p>
                <p className="text-[#FFF]/80 italic font-thin">
                  Por favor, intenta <b>llegar a tiempo</b> para que disfrutes
                  de mi acto de entrada.
                </p>
                {guests && <GuestQty qty={guests} />}
              </div>
              {/* <Button className="w-fit h-fit p-[12px_24px_16px] rounded-[50px] font-[family-name:var(--font-hahmlet)] text-[#2D4530] text-[18px]">
                Confirmar
              </Button> */}
            </div>
            <div className="w-full p-[24px] rounded-[20px] bg-[#FFF]/10">
              <h2 className="mb-[24px]">Sobre el lugar</h2>
              <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[#FFF]/50">Direcci&oacute;n:</label>
                  <p>C. Las Palmas #229, San Salvador</p>
                </div>
                <Image
                  src={"/location_image_mobile.png"}
                  alt="Location Image"
                  width={1017}
                  height={624}
                  className="rounded-[16px]"
                />
                <MapsDrawer />
                {/* <p className="text-[#FFF]/80 italic font-thin">
                  Hay parqueo disponible para todos los invitados. Si necesitas
                  ayuda para llegar, podemos coordinar transporte.
                </p> */}
              </div>
            </div>
            <div className="flex flex-col gap-[24px] items-center">
              <div className="flex flex-col gap-[40px] items-center">
                <h2>C&oacute;digo de vestimenta</h2>
                <p className="text-center">
                  Para esta noche tan especial, el código de vestimenta será con
                  colores sugeridos en tonos neutros y pastel como beige, rosa
                  viejo, verde oliva y gris claro. Queremos que luzcas increíble
                  y que el ambiente refleje armonía y sofisticación.
                  <br />
                  <br />
                  Si necesitas inspiración, aquí encontrarás algunas ideas de
                  outfits que combinan con la temática del evento.
                </p>
              </div>
              <DressCodeGrid />
            </div>

            {/* <div className="flex flex-col gap-[24px] items-center w-full">
            <h2 className="leaf-title">Preguntas Frecuentes</h2>
            <Collapse
              size="large"
              className="w-full faq-collapse"
              items={FAQs}
            />
          </div> */}
          </div>
        </div>
      </Brave>
    </div>
  );
};

export default MainView;
