
interface FormProps {
    inputNumber: number,
    inputAmount: number
}
interface StatelessPage<P = {}> extends React.SFC<P> {
    getInitialProps?: (ctx: any) => Promise<P>
}