import projectPackage from '../../../../../../package.json'


export function DisplayVersion() {
    return (
        <div className="w-fit flex justify-end items-center">
            <span className="text-neutral/25 text-sm">v{projectPackage.version}</span>
        </div>
    )
}
