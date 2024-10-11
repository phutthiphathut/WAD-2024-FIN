import Customer from "@/models/Customer"; // Import your Customer model

// GET: Retrieve all customers
export async function GET() {
  try {
    const customers = await Customer.find();
    return new Response(JSON.stringify(customers), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error fetching customers' }), { status: 500 });
  }
}

// POST: Add a new customer
export async function POST(request) {
  try {
    const body = await request.json();
    const customer = new Customer(body);
    await customer.save();
    return new Response(JSON.stringify(customer), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error creating customer' }), { status: 400 });
  }
}

// PUT: Update a customer by ID (replaces the entire record)
export async function PUT(request) {
  try {
    const body = await request.json();
    const { _id, ...updateData } = body;
    const customer = await Customer.findByIdAndUpdate(_id, updateData, { new: true });
    
    if (!customer) {
      return new Response("Customer not found", { status: 404 });
    }

    return new Response(JSON.stringify(customer), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error updating customer' }), { status: 400 });
  }
}

// PATCH: Partially update a customer by ID
export async function PATCH(request) {
  try {
    const body = await request.json();
    const { _id, ...updateData } = body;
    const customer = await Customer.findByIdAndUpdate(_id, updateData, { new: true });

    if (!customer) {
      return new Response("Customer not found", { status: 404 });
    }

    return new Response(JSON.stringify(customer), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error updating customer' }), { status: 400 });
  }
}
