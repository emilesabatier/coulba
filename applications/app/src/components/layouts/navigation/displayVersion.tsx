import projectPackage from '../../../../../../package.json'


export function DisplayVersion() {
    return (
        <div className="w-fit flex justify-end items-center">
            <span className="text-neutral/25 text-sm">{projectPackage.version}</span>
        </div>
    )
}
