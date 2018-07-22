export class BiddingReports{
    constructor(public AssociateName:string,public BatchNo:string,public BankCode:string,public BankShotCode:string,
    public TotalImagesUpload:number,public SkipImages:number,public PendingImages:number,
    public HealthCheckPending:number,public EntryDone:number,public ResponseRecieved:number,
    public ResponsePending:number,public SkipReject:number)
    {
        
    }
}