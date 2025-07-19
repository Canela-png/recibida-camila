import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, GraduationCap } from "lucide-react";

export default function FelicitacionCamila() {
  return (
    <main className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6">
      <Card className="max-w-xl w-full bg-white shadow-2xl rounded-2xl p-6 border-0">
        <CardContent className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3 text-pink-600">
            <GraduationCap className="w-8 h-8" />
            <h1 className="text-3xl font-bold">¡FELICITACIONES, CAMILA!</h1>
            <Sparkles className="w-8 h-8" />
          </div>

          <p className="text-lg text-gray-700">
            Después de años de esfuerzo, estudio, risas, lágrimas, guardias, finales interminables y una vocación que se hizo más fuerte con cada paso... <strong className="text-pink-600">¡HOY TE RECIBISTE DE FONOAUDIÓLOGA!</strong>
          </p>

          <p className="text-md text-gray-800">
            Una profesional que no solo entiende de voz, lenguaje, audición y comunicación, sino que también sabe escuchar con el corazón, acompañar con empatía y sanar con palabras.
          </p>

          <div className="text-left text-gray-700 space-y-2">
            <p>🎓 Tu voz que eligió esta carrera con amor</p>
            <p>📚 Tus madrugadas de estudio y perseverancia</p>
            <p>👂 Tus ganas de mejorar la vida de otros/as</p>
            <p>💗 Tu pasión por acompañar procesos únicos</p>
          </div>

          <p className="text-md text-gray-800 italic">
            Gracias por elegir una profesión que transforma vidas. Gracias por no rendirte nunca. Gracias por inspirar con tu camino.
          </p>

          <p className="text-pink-600 font-semibold text-lg">
            ¡Que este sea solo el comienzo de una carrera llena de logros, aprendizajes y momentos hermosos! 🌈
          </p>

          <div className="pt-4 text-gray-600 text-sm">
            <p>📍 Fecha de recibida: <strong>18/07/2025</strong></p>
          </div>

          <h2 className="text-xl font-bold text-pink-700 mt-6">¡A brindar por vos, Fono recién recibida! 🥂</h2>
        </CardContent>
      </Card>
    </main>
  );
}
