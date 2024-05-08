import projectPackage from '../../../../../../package.json'


export function DisplayVersion() {
    return (
        <div className="ml-auto w-fit flex flex-row justify-end items-center">
            <span className="text-neutral/25 text-sm">{projectPackage.version}</span>
        </div>
    )
}
