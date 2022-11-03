<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>A simple, clean, and responsive HTML invoice template</title>

		<style>
			.invoice-box {
				max-width: 800px;
				margin: auto;
				padding: 10px;
				border: 1px solid #eee;
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
				font-size: 16px;
				line-height: 24px;
				font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
				color: #555;
			}

			.invoice-box table {
				width: 100%;
				line-height: inherit;
				text-align: left;
			}

			.invoice-box table td {
				padding: 5px;
				vertical-align: top;
			}

			.invoice-box table tr td:nth-child(2) {
				text-align: right;
			}

			.invoice-box table tr.top table td {
				padding-bottom: 20px;
			}

			.invoice-box table tr.top table td.title {
				font-size: 45px;
				line-height: 45px;
				color: #333;
			}

			.invoice-box table tr.information table td {
				padding-bottom: 40px;
			}

			.invoice-box table tr.heading td {
				background: #eee;
				border-bottom: 1px solid #ddd;
				font-weight: bold;
			}

			.invoice-box table tr.details td {
				padding-bottom: 20px;
			}

			.invoice-box table tr.item td {
				border-bottom: 1px solid #eee;
				text-align:justify !important;
				font-size:14px 1important
			}

			.invoice-box table tr.item.last td {
				border-bottom: none;
			}

			.invoice-box table tr.total td:nth-child(2) {
				border-top: 2px solid #eee;
				font-weight: bold;
			}

			@media only screen and (max-width: 600px) {
				.invoice-box table tr.top table td {
					width: 100%;
					display: block;
					text-align: center;
				}

				.invoice-box table tr.information table td {
					width: 100%;
					display: block;
					text-align: center;
				}
			}
.display-none{
	opacity: 0.1 !important;
}
.mt10{
	margin-top:10% !important
}
			/** RTL **/
			.invoice-box.rtl {
				direction: rtl;
				font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
			}

			.invoice-box.rtl table {
				text-align: right;
			}

			.invoice-box.rtl table tr td:nth-child(2) {
				text-align: left;
			}
			.order-summery{
				background:#eee ;text-align:left!important;padding:7px !important;width:auto!important
			}
			.bg-primary{
				background:#4ec2f1 !important;
			}
			.text-left{text-align: left !important;}
			.w30{
				width:30%;text-align:center
			}
			.w20{
				width:20%;text-align:center
			}
			.paid-w{
				width:25% !important
			}
			.overflow-x{
				overflow-x:auto;
			}
		</style>
	</head>

	<body>
		<div class="invoice-box">
			<table cellpadding="0" cellspacing="0">
				<tr class="top">
					<td colspan="2">
						<table>
							<tr>
								<td class="title">
									<img src="https://www.sparksuite.com/images/logo.png" style="width: 100%; max-width: 300px" />
								</td>

								<td>
									Invoice #: {{$data->Ref}}<br />
									Date: {{$data->date}}<br />
									Payment Status: {{$data->payment_status}}
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr class="information">
					<td colspan="2">
						<table>
							<tr>
								<td>
									
								 @if($data->supplier){{$data->supplier->name}}@endif<br/>
								 @if($data->supplier){{$data->supplier->email}}@endif<br/>
								 @if($data->supplier){{$data->supplier->phone}}@endif<br/>
								 @if($data->supplier){{$data->supplier->address}}@endif
           
								</td>

								<td>
									Acme Corp.<br />
									John Doe<br />
									john@example.com
								</td>
							</tr>
						</table>
					</td>
				</tr>
               
	  
			</table>
			<div class="overflow-x">
			<table cellpadding="0" cellspacing="0" >

				<tr class="heading">
					<td class="w30">Item</td>
					<td class="w20">Unit.Price</td>
					<td class="w20">Quantity</td>
					<td class="w20">Discount</td>
					<td class="w20">Tax</td>

					<td class="w20">Total</td>
				</tr>
                 @foreach($data->details as $product)
				<tr class="item">
					<td >{{$product->code}}({{$product->name}})</td>
					<td class="text-left">{{$product->price}}</td>
					<td>{{$product->quentity}}{{$product->unit_sale}}</td>
					<td>{{$product->discount}}</td>
					<td>{{$product->tax}}</td>
					<td>{{$product->total}}</td>
				</tr>
               @endforeach
				
			
				<tr >
					<td colspan="4"></td>					
					<td class="order-summery">Order Tax</td>
					<td class="order-summery">{{$data->tax_rate}}</td>
				</tr>
				<tr>
					<td colspan="4"></td>					
					<td class="order-summery">Discount</td>
					<td class="order-summery">{{$data->discount}}</td>
				</tr>
				<tr>
					<td colspan="4"></td>					
					<td class="order-summery">Shipping</td>
					<td class="order-summery">{{$data->shipping}}</td>
				</tr>
				<tr>
					<td colspan="4"></td>					
					<td class="order-summery">Total</td>
					<td class="order-summery">$ {{$data->grand_total}}</td>
				</tr>
				<tr>
					<td colspan="4"></td>					
					<td  class="order-summery paid-w">Paid Amount</td>
					<td class="order-summery">$ {{$data->paid_amount}}</td>
				</tr>
				<tr>
					<td colspan="4"></td>					
					<td class="order-summery">Due</td>
					<td class="order-summery">${{$data->grand_total-$data->paid_amount}}</td>
				</tr>
			
			</table>
		</div>
		</div>
	</body>
</html>
