import { BackgroundGradient } from "./background-gradient"; 

export default function Hero() {
  return (
      <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8"> 
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          
          <BackgroundGradient containerClassName="lg:row-span-2">
            <div className="relative flex h-full flex-col overflow-hidden bg-gray-800 rounded-[22px]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  One place for your Customer Service, Marketing, Sales and so
                  much more.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </BackgroundGradient>

          <BackgroundGradient containerClassName="max-lg:row-start-1">
            <div className="relative flex h-full flex-col overflow-hidden bg-gray-800 rounded-[22px]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Get all you need to run your bussiness in a single place
                </p>
              </div>

              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
          </BackgroundGradient>

          <BackgroundGradient containerClassName="max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="relative flex h-full flex-col overflow-hidden bg-gray-800 rounded-[22px]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Smart Automation That Works Like Clockwork
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
          </BackgroundGradient>
          <BackgroundGradient containerClassName="lg:row-span-2">
            <div className="relative flex h-full flex-col overflow-hidden bg-gray-800 rounded-[22px]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Create Web Pages without HTML, use the drag and drop
                  integrated site builder
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        Index.cldztrs
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">
                        App.cldzters
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14 text-white/90">
                    console.log("Hola desde Cloudzters")
                  </div>
                </div>
              </div>
            </div>
          </BackgroundGradient>

        </div>
      </div>
  );
}