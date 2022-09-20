import commonHandler from '@handlers/commonHandler';
import { prisma } from '@lib/prisma';

const handler = commonHandler
  .post(async (req, res) => {
    if (req.query.type === 'user_create') {
      // 🔥 Insert Data --> 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      const { email, password, fName, lName } = req.body;
      const newUser = await prisma.user.create({
        data: {
          email,
          password,
          fName,
          lName,
        },
      });
      if (newUser) {
        return res.status(200).json({
          error: false,
          message: `User Registered`,
          data: newUser,
        });
      }
      throw new Error(`Couldn't register the user`);
    } else if (req.query.type === 'user_test_email') {
      // 🔥 Test Email --> 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      if (req.query.email) {
        const user = await prisma.user.findUnique({
          where: {
            email: `${req.query.email}`,
          },
          select: {
            email: true,
          },
        });
        if (user) {
          return res.status(200).json({
            error: false,
            success: 1,
            message: `${user.email} is already Registered`,
          });
        }
        return res.status(200).json({
          error: false,
          success: 2,
          message: `${req.query.email} can be used`,
        });
      }
      throw new Error('No related query data');
    } else if (req.query.type === 'user_update') {
      // 🔥 Update Data --> 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      const {
        address,
        onlineStatus,
        id,
        fName,
        lName,
        mobileNo,
        password,
        website,
        gitHub,
        twitter,
        instagram,
        facebook,
        gender,
      } = req.body;
      if (id) {
        const updatedUser = await prisma.user.update({
          where: {
            id: id,
          },
          data: {
            address,
            fName,
            lName,
            mobileNo: `${mobileNo}`,
            password,
            website,
            gitHub,
            twitter,
            instagram,
            facebook,
            gender,
            onlineStatus,
          },
        });
        if (updatedUser) {
          return res.status(200).json({
            error: false,
            success: 1,
            message: `Data is updated`,
            data: updatedUser,
          });
        }
        throw new Error('User is not available');
      }
      throw new Error('User id is not provided');
    } else if (req.query.type === 'user_delete') {
      // 🔥 Delete Data --> 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      const { id } = req.body;
      if (id) {
        const deletedUser = await prisma.user.delete({
          where: {
            id: id,
          },
        });
        if (deletedUser) {
          return res.status(200).json({
            error: false,
            success: 1,
            message: `Account Removed Successfully`,
            data: deletedUser,
          });
        }
        throw new Error('User is not available');
      }
      throw new Error('Id is not available');
    } else if (req.query.type === 'user_login') {
      // 🔥 Login Data --> 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      const { email, password } = req.body;
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (user) {
        if (user.password === password) {
          return res.status(200).json({
            data: {
              id: user.id,
              email: user.email,
              role: user.role,
            },
            error: false,
            message: `${user.email} Login is successful`,
          });
        } else {
          throw new Error('User name or password is wrong');
        }
      }
      throw new Error('User name or password is wrong');
    } else if (req.query.type === 'user_read') {
      // 🔥 Read Data --> 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      const { id } = req.body;
      if (id) {
        const availableUser = await prisma.user.findUnique({
          where: {
            id: id,
          },
        });
        if (availableUser) {
          return res.status(200).json({
            error: false,
            message: `Data Retrieved Successfully`,
            data: availableUser,
          });
        }
        throw new Error('No user found');
      }
      throw new Error('No related query data');
    } else if (req.query.type === 'offer_create') {
      // 🔥 Create Offer --> 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      const { discount, offerCode, endDate, startDate, desc, type, status } = req.body;
      const newOffer = await prisma.offer.create({
        data: {
          discount,
          offerCode,
          endDate,
          startDate,
          desc,
          type,
          status,
        },
      });
      if (newOffer) {
        return res.status(200).json({
          error: false,
          message: `OfferID:${newOffer.id} Is Added`,
          data: newOffer,
        });
      }
    } else if (req.query.type === 'offer_get') {
      // 🔥 Get Offer --> 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      const { offerCode } = req.body;
      const offerDetails = await prisma.offer.findMany({
        where: {
          offerCode: {
            equals: offerCode,
          },
        },
      });

      if (offerDetails.length > 0 && offerDetails[0] && offerDetails[0]?.offerCode?.localeCompare(offerCode) === 0) {
        return res.status(200).json({
          error: false,
          success: 1,
          message: `Offer available`,
          data: offerDetails,
        });
      } else {
        return res.status(200).json({
          error: false,
          success: 2,
          message: `Offer not available`,
          data: [],
        });
      }
    } else if (req.query.type === 'booking_set') {
      // 🔥 Get Offer --> 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      const { checkIn, checkOut, roomType, offerId, meal, numberOfRooms, userEmail, totalPayment, note } = req.body;
      const newBooking = await prisma.booking.create({
        data: {
          checkIn,
          checkOut,
          roomType,
          offerId,
          meal,
          note,
          numberOfRooms,
          userEmail,
          totalPayment,
        },
      });
      if (newBooking) {
        return res.status(200).json({
          error: false,
          message: `Booking:${newBooking.id} Is Added`,
          data: newBooking,
        });
      }
      throw new Error('Booking not created');
    }
    // Pasindu can use--->
    else if (req.query.type === 'supplier_create') {
      const { firstName, lastName, supplierEmail, supplierNIC, CompanyName, PhoneNumber, category } = req.body;
      const newSupplier = await prisma.supplier.create({
        data: {
          firstName,
          lastName,
          supplierEmail,
          supplierNIC,
          CompanyName,
          PhoneNumber,
          category,
        },
      });
      if (newSupplier) {
        return res.status(200).json({
          error: false,
          message: `Supplier:${newSupplier.supplierId} Is Created`,
          data: newSupplier,
        });
      }
      throw new Error('Supplier not created');
    } else if (req.query.type === 'supplier_update') {
      const { firstName, lastName, supplierEmail, supplierNIC, CompanyName, PhoneNumber, category, supplierId } =
        req.body;
      const newSupplier = await prisma.supplier.update({
        where: {
          supplierId: supplierId,
        },
        data: {
          firstName,
          lastName,
          supplierEmail,
          supplierNIC,
          CompanyName,
          PhoneNumber,
          category,
        },
      });
      if (newSupplier) {
        return res.status(200).json({
          error: false,
          message: `Supplier:${newSupplier.supplierId} Is Created`,
          data: newSupplier,
        });
      }
      throw new Error('Supplier not created');
    } else if (req.query.type === 'supplier_get') {
      const supplier = await prisma.supplier.findMany();
      if (supplier) {
        return res.status(200).json({
          error: false,
          message: ``,
          data: supplier,
        });
      }
      throw new Error('Supplier not created');
    } else if (req.query.type === 'supplier_delete_one') {
      const { supplierId } = req.body;
      const deletedSupplier = await prisma.supplier.delete({
        where: {
          supplierId: +supplierId,
        },
      });
      if (deletedSupplier) {
        return res.status(200).json({
          error: false,
          message: `Supplier:${deletedSupplier.supplierId} Is Deleted`,
          data: deletedSupplier,
        });
      }
      throw new Error('Supplier not available');
    } else if (req.query.type === 'supplier_delete_all') {
      const deletedSupplier = await prisma.supplier.deleteMany();
      if (deletedSupplier) {
        return res.status(200).json({
          error: false,
          message: `All deleted`,
          data: [],
        });
      }
      throw new Error('Suppliers not available');
    } else if (req.query.type === 'booking_get') {
      const bookings = await prisma.booking.findMany();
      if (bookings) {
        return res.status(200).json({
          error: false,
          message: ``,
          data: bookings,
        });
      }
      throw new Error('Booking not found');
    }
    // Pasindu can use -->
    throw new Error('No Type Provided');
  })
  .get(async (req, res) => {
    // 🌟 get offers --> [GET] /offers
    if (req.query.page && req.query.limit && req.query.orderBy && req.query.order) {
      const limit = +req.query.limit;
      const page = +req.query.page;
      const skip = limit * (page - 1);
      const offers = await prisma.offer.findMany({
        skip: skip,
        take: limit,
        orderBy: {
          [`${req.query.orderBy}`]: `${req.query.order}`,
        },
      });
      const total = await prisma.offer.count();
      const totalPages = Math.ceil(total / limit);
      return res.status(200).json({
        error: false,
        message: `${offers.length} Data Retrieved`,
        data: offers,
        page: page,
        totalPages: totalPages,
        limit: limit,
        user: req.user,
        total: total,
      });
    } else if (req.query.start && req.query.end) {
      const offers = await prisma.offer.findMany({
        where: {
          startDate: {
            gte: new Date(`${req.query.start}`),
            lte: new Date(`${req.query.end}`),
          },
        },
        select: {
          discount: true,
          startDate: true,
          endDate: true,
        },
      });
      return res.status(200).json({
        error: false,
        message: `${offers.length} Data Retrieved`,
        data: offers,
        user: req.user,
      });
    } else if (req.query.searchKey && req.query.searchBy) {
      const tempNm = +req.query.searchKey;
      const offers = await prisma.offer.findMany({
        where: {
          [`${req.query.searchBy}`]: {
            ...(req.query.searchBy !== 'id' && req.query.searchBy !== 'discount' && { contains: req.query.searchKey }),
            ...(req.query.searchBy === 'id' && Number.isInteger(tempNm) && { in: tempNm }),
            // ...(req.query.searchBy === 'discount' && !Number.isNaN(req.query.searchKey) && { in: tempNm }),
          },
        },
      });
      const total = await prisma.offer.count();
      return res.status(200).json({
        error: false,
        message: `${offers.length} Data Retrieved`,
        data: offers,
        page: 1,
        totalPages: 1,
        limit: 1000,
        user: req.user,
        total: total,
      });
    } else {
      throw new Error('No related query data');
    }
  })
  .put(async (req, res) => {
    const { discount, offerCode, endDate, startDate, desc, type, status, id } = req.body;
    if (req.query.type === 'offer_update') {
      const editedOffer = await prisma.offer.update({
        where: {
          id: id,
        },
        data: {
          discount,
          offerCode,
          endDate,
          startDate,
          desc,
          type,
          status,
        },
      });
      if (editedOffer) {
        return res.status(200).json({
          error: false,
          message: `OfferId: ${editedOffer.id} Is Updated`,
          data: editedOffer,
        });
      }
      throw new Error(`Couldn't update the offer`);
    }
    throw new Error(`Type is not available`);
  })
  .delete(async (req, res) => {
    // 🔥 Delete Data --> 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    if (req.query.type === 'user_one_delete') {
      const deletedOffer = await prisma.offer.delete({
        where: {
          id: +req.query.id,
        },
      });
      if (deletedOffer) {
        return res.status(200).json({
          error: false,
          message: `OfferId: ${deletedOffer.id} Is Deleted`,
          data: [],
        });
      }
      throw new Error(`Couldn't register the user`);
    } else if (req.query.type === 'user_all_delete') {
      const deletedData = await prisma.offer.deleteMany();
      if (deletedData) {
        return res.status(200).json({
          error: false,
          message: `All data Removed Data Removed`,
          data: [],
        });
      }
      throw new Error(`Not Deleted`);
    }
    throw new Error(`No Related Type`);
  });

export default handler;
