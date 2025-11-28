import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  create(createPaymentDto: CreatePaymentDto) {
    return 'This action adds a new payment';
  }

  findAll() {
    return `This action returns all payment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }

  async addInvoice({ amount, currency }: CreatePaymentDto) {
    try {
      const apiKey = process.env.XENDIT_API_KEY;
      const response = await fetch('https://api.xendit.co/v2/invoices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Basic ' + Buffer.from(apiKey + ':').toString('base64'),
        },
        body: JSON.stringify({
          external_id: 'invoice-' + Date.now(),
          amount: amount,
          currency: currency,
        }),
      });

      if (!response.ok) {
        const err = await response.text();
        throw new Error(`Xendit Error: ${err}`);
      }

      return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
