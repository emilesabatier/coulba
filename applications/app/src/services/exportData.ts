export function exportDataAsCSV(fileName: string, headers: string[], data: string[][]) {
    const csvArray = [
        headers,
        ...data
    ]

    const encodedCsv = "data:text/csv;charset=utf-8," + encodeURIComponent(csvArray.map(e => e.join(";")).join("\n"))

    const link = document.createElement("a")
    link.setAttribute("href", encodedCsv)
    link.setAttribute("download", `${fileName}_${new Date().toISOString()}.csv`)
    document.body.appendChild(link)

    link.click()
}
