// import { ButtonOutline } from '@coulba/design/buttons'
// import { Popover, PopoverContent, PopoverTrigger } from '@coulba/design/overlays'
// import { IconMenu } from '@tabler/icons-react'
// import { useRef, useState } from 'react'
// import { useApplications } from '../../../hooks/useApplications'
// import { DisplayVersion } from './displayVersion'
// import { Navigation } from './navigation'


// export function MobileNavigation() {
//     const [isOpen, setIsOpen] = useState(false)
//     const triggerRef = useRef<HTMLButtonElement>(null)

//     const [applicationGroups] = useApplications()
//     const activeApplication = applicationGroups.flatMap(x => x.routes).find(x => x.isActive)

//     return (
//         <Popover open={isOpen} onOpenChange={(open) => setIsOpen(open)} >
//             <PopoverTrigger asChild>
//                 <ButtonOutline
//                     icon={activeApplication?.icon ?? <IconMenu />}
//                     text={activeApplication?.title ?? "Naviguer"}
//                     onClick={() => setIsOpen(true)}
//                     ref={triggerRef}
//                     className="w-full"
//                 />
//             </PopoverTrigger>
//             <PopoverContent
//                 side='top'
//                 align='end'
//                 onInteractOutside={() => setIsOpen(false)}
//                 className='w-full h-full overflow-y-auto overflow-x-hidden rounded-md bg-white border-t border-neutral/10 shadow-none data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right'
//                 sideOffset={8}
//                 style={{
//                     maxHeight: `calc(100vh - ${triggerRef.current?.offsetHeight || 0}px - 16px)`
//                 }}
//             >
//                 <div className="w-full max-w-full flex flex-col justify-start items-center gap-x-2 p-2 h-full overflow-y-auto overflow-x-hidden">
//                     <Navigation onAfterClick={() => setIsOpen(false)} />
//                     <DisplayVersion />
//                 </div>
//             </PopoverContent>
//         </Popover>
//     )
// }
